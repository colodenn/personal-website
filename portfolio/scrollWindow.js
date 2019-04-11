/* Copyright (c) 2007 Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * ALPHA
 */

(function($){

$.ScrollWindow = function(element, settings, callbacks) {
	var _self = this;

	// Get setting for this window
	this.settings = $.extend({
		relativeLinks   : true,
		theme           : '',
		id              : '',
		monitor         : true,
		autoEnable      : true,
		scrollIncrement : 12, // pixels
		mouseWheel      : true,
		sliderMinHeight : 20 // pixels
	}, settings || {});

	// Get callbacks for this window
	this.callbacks = $.extend({
		scroll     : null,
		enable     : null,
		disable    : null,
		refresh    : null,
		monitor    : null,
		drag       : null,
		mousewheel : null
	}, callbacks || {});

	this.el  = element;
	this.$el = $(element);

	// Add necessary HTML and store
	this.$window       = this.$el.wrap('<div id="' + this.settings.id + '" class="swWindow ' + this.settings.theme + '">').parent();
	this.$content      = this.$el.attr('id', '').addClass('swContent');
	this.$track        = $('<div class="swTrack">'       ).appendTo( this.$window );
	this.$arrowUp      = $('<div class="swArrowUp">'     ).appendTo( this.$window );
	this.$arrowDown    = $('<div class="swArrowDown">'   ).appendTo( this.$window );
	this.$slider       = $('<div class="swSlider">'      ).appendTo( this.$track  );
	this.$sliderTop    = $('<div class="swSliderTop">'   ).appendTo( this.$slider );
	this.$sliderMiddle = $('<div class="swSliderMiddle">').appendTo( this.$slider );
	this.$sliderBottom = $('<div class="swSliderBottom">').appendTo( this.$slider );

	$.extend(this, {
		version : 0.1,

		monitorTimer    : null,
		currentHeight   : null,
		arrowTimeout    : null,
		arrowTimer      : null,
		trackTimeout    : null,
		trackTimer      : null,
		direction       : null,
		currentArrowInc : null,
		lastMouseY      : null,
		trackMousePos   : null,
		dragMouseOffset : null,
		contentPixels   : null,
		sliderPixels    : null,

		// Event Methods
		addEvents    : function() {
			$('.swArrowUp, .swArrowDown', _self.$window)
				.bind( 'mouseover', _self.onArrowMouseOver )
				.bind( 'mouseout' , _self.onArrowMouseOut  )
				.bind( 'mousedown', _self.onArrowMouseDown )
				.bind( 'mouseup'  , _self.onArrowMouseUp   );

			_self.$slider
				.bind( 'mouseover', _self.onSliderMouseOver )
				.bind( 'mouseout' , _self.onSliderMouseOut  )
				.bind( 'mousedown', _self.onSliderMouseDown )
				.bind( 'mouseup'  , _self.onSliderMouseUp   );

			_self.$track
				.bind( 'mouseout' , _self.onTrackMouseUp   )
				.bind( 'mousedown', _self.onTrackMouseDown )
				.bind( 'mouseup'  , _self.onTrackMouseUp   );

			if (_self.settings.mouseWheel && jQuery.fn.mousewheel)
				_self.$window
					.mousewheel(_self.onMouseWheel, false);
		},
		removeEvents : function() {
			$('.swArrowUp, .swArrowDown', _self.$window)
				.unbind( 'mouseover', _self.onArrowMouseOver )
				.unbind( 'mouseout' , _self.onArrowMouseOut  )
				.unbind( 'mousedown', _self.onArrowMouseDown )
				.unbind( 'mouseup'  , _self.onArrowMouseUp   );

			_self.$slider
				.unbind( 'mouseover', _self.onSliderMouseOver )
				.unbind( 'mouseout' , _self.onSliderMouseOut  )
				.unbind( 'mousedown', _self.onSliderMouseDown )
				.unbind( 'mouseup'  , _self.onSliderMouseUp   );

			_self.$track
				.unbind( 'mouseout' , _self.onTrackMouseUp   )
				.unbind( 'mousedown', _self.onTrackMouseDown )
				.unbind( 'mouseup'  , _self.onTrackMouseUp   );

			if (_self.settings.mouseWheel && jQuery.fn.mousewheel)
				_self.$window
					.unmousewheel(_self.onMouseWheel);
		},

		ignore : function() {
			return false; 
		},

		// Arrow Events
		onArrowMouseOver : function() {
			if (_self.dragMouseOffset) return;

			var $el = $(this);
			if      ( $el.is('.swArrowUp') )   $el.addClass('swArrowUp-over');
			else if ( $el.is('.swArrowDown') ) $el.addClass('swArrowDown-over');
		},
		onArrowMouseOut  : function() {
			var $el = $(this);
			if      ( $el.is('.swArrowUp') ) $el.removeClass('swArrowUp-over');
			else if ( $el.is('.swArrowDown') ) $el.removeClass('swArrowDown-over');

			_self.onArrowMouseUp.apply(this);
		},
		onArrowMouseDown : function() {
			if (_self.settings.monitor) _self.unmonitor();

			var $el = $(this);
			$('body')
				.bind('mouseup' , _self.onArrowMouseUp)
				.bind('mouseout', _self.onArrowMouseUp);

			if ( $el.is('.swArrowUp') ) {
				_self.direction = -1;
				$el.addClass('swArrowUp-active');
			} else if ( $el.is('.swArrowDown') ) {
				_self.direction = 1;
				$el.addClass('swArrowDown-active');
			}

			_self.currentArrowInc = 0;
			_self.whileArrowActive();
			_self.arrowTimeout = window.setTimeout(function() {
				_self.arrowTimer = window.setInterval(_self.whileArrowActive, 100);
			}, 250);

			return false;
		},
		onArrowMouseUp   : function() {
			if (_self.settings.monitor) _self.monitor();

			if (_self.dragMouseOffset) return;

			var $el = $(this);

			$('body')
				.unbind('mouseup' , _self.onArrowMouseUp)
				.unbind('mouseout', _self.onArrowMouseUp);

			if (_self.arrowTimeout) window.clearTimeout(_self.arrowTimeout);
			if (_self.arrowTimer)   window.clearInterval(_self.arrowTimer);

			if      ( $el.is('.swArrowUp') ) $el.removeClass('swArrowUp-active');
			else if ( $el.is('.swArrowDown') ) $el.removeClass('swArrowDown-active');
		},
		whileArrowActive : function() {
			var top       = Math.abs( parseFloat( _self.$content.css('top') ) ) || 0,
			    increment = (_self.settings.scrollIncrement + (_self.settings.scrollIncrement * (_self.currentArrowInc/10)));
			_self.jumpTo( top + (increment * _self.direction) );
			_self.currentArrowInc++;
		},

		// Slider Events
		onSliderMouseOver : function()      {
			_self.$slider.addClass('swSlider-over');
		},
		onSliderMouseOut  : function()      {
			_self.$slider.removeClass('swSlider-over');
		},
		onSliderMouseDown : function(event) {
			if (_self.settings.monitor) _self.unmonitor();

			_self.$slider.addClass('swSlider-active');

			var sliderTop = parseFloat( _self.$slider.css('top') );

			_self.lastMouseY      = event.pageY;
			_self.dragMouseOffset = _self.lastMouseY - (_self.$track.offset().top + sliderTop);

			$('body')
				.bind('mouseup', _self.onSliderMouseUp)
				.bind('mousemove', _self.onDrag);

			if ($.browser.msie)
				$('body')
					.bind('dragstart', _self.ignore)
					.bind('selectstart', _self.ignore);

			return false;
		},
		onSliderMouseUp   : function()      {
			if (_self.settings.monitor) _self.monitor();
			_self.dragMouseOffset = null;

			_self.$slider.removeClass('swSlider-active');

			$('body')
				.unbind('mouseup', _self.onSliderMouseUp)
				.unbind('mousemove', _self.onDrag);

			if ($.browser.msie)
				$('body')
					.unbind('dragstart', _self.ignore)
					.unbind('selectstart', _self.ignore);
		},
		onDrag            : function(event) {
			if ( _self.callbacks.drag && _self.callbacks.drag() === false ) return;

			var sliderTop = parseFloat( _self.$slider.css('top') ) || 0,
			    y         = sliderTop + (event.pageY - _self.lastMouseY),
			    to        = Math.min( Math.max(y, 0), (_self.$track.height() - _self.$slider.height()) );

			_self.$slider .css('top', to);
			_self.$content.css('top', to*_self.contentPixels*-1);

			if ( y > to || y < to ) return false;
			_self.lastMouseY = event.pageY;
			return false;
		},

		// Track Events
		onTrackMouseDown : function(event) {
			if (_self.settings.monitor) _self.unmonitor();

			_self.trackMousePos = event.pageY - _self.$track.offset().top;

			$('body')
				.bind('mouseup' , _self.onTrackMouseUp)
				.bind('mouseout', _self.onTrackMouseUp);

			_self.whileTrackActive();	
			_self.trackTimeout = setTimeout(function() {
				_self.trackTimer = setInterval(_self.whileTrackActive, 100);
			}, 250);

			return false;
		},
		onTrackMouseUp   : function()      {
			if (_self.settings.monitor) _self.monitor();

			if (_self.dragMouseOffset) return;

			if (_self.trackTimeout) clearTimeout(_self.trackTimeout);
			if (_self.trackTimer)   clearInterval(_self.trackTimer);

			$('body')
				.unbind('mouseup' , _self.onTrackMouseUp)
				.unbind('mouseout', _self.onTrackMouseUp);
		},
		whileTrackActive : function()      {
			var sliderTop = parseFloat( _self.$slider.css('top') ) || 0, to;

			if      (sliderTop > _self.trackMousePos) to = sliderTop - _self.$slider.height();
			else if (sliderTop < _self.trackMousePos) to = sliderTop + _self.$slider.height();
			else                                     _self.onTrackMouseUp();

			to = Math.min( Math.max(to, 0), (_self.$track.height() - _self.$slider.height()) );
			_self.$slider .css('top', to);
			_self.$content.css('top', to*_self.contentPixels*-1);
		},

		// Mousewheel
		onMouseWheel : function(event, delta) {
			if ( _self.callbacks.mousewheel && _self.callbacks.mousewheel() === false ) return;

			var top = Math.abs( parseFloat( _self.$content.css('top') ) ) || 0;
			_self.jumpTo( top + ((_self.settings.scrollIncrement*2) * (delta * -1)) );

			if ( top != Math.abs( parseFloat( _self.$content.css('top') ) ) ) {
				event.preventDefault();
				event.stopPropagation();
			} else if ( $(this).parents().filter('[@_mwHandler]').length )
					event.preventDefault();
		},

		/**
		 * Add events back to the scroll window and give it focus. 
		 * Removes the 'disabled' class from the container.
		 */
		enable: function() {
			if ( _self.callbacks.enable && _self.callbacks.enable() === false ) return;
			_self.$window.removeClass('disabled');

			_self.refresh();
			if (_self.settings.monitor) _self.monitor();
		},

		/**
		 * Remove events from the scroll window and remove focus. 
		 * Adds a class of 'disabled' to the container.
		 */
		disable: function() {
			if ( _self.callbacks.disable && _self.callbacks.disable() === false ) return;
			_self.$window.addClass('disabled');
			_self.removeEvents();
			if (_self.settings.monitor) _self.unmonitor();
		},

		/**
		 * Refreshes the scroll window. 
		 */
		refresh: function() {
			if ( this.callbacks.refresh && this.callbacks.refresh() === false ) return;

			if ( this.$content.outerHeight() > this.$window.height() ) {
				this.$window.removeClass('noScrollBar');
				this.$slider.height( Math.max( ( this.$window.height() / this.$content.outerHeight() ) * this.$track.height(), this.settings.sliderMinHeight ) );
				this.$sliderMiddle.css( 'top', ( (this.$slider.height() / 2) - (this.$sliderMiddle.height() / 2) ) );

				this.contentPixels = (this.$content.outerHeight() - this.$window.outerHeight()) / (this.$track.height() - this.$slider.height());
				this.sliderPixels  = (this.$track.height() - this.$slider.height()) / (this.$content.outerHeight() - this.$window.height());

				this.addEvents();
				if ( this.settings.relativeLinks ) this.setupRelativeLinks();
			} else {
				this.$window.addClass('noScrollBar');
				this.removeEvents();
			}
		},

		/**
		 * Monitors the scroll window to watch for content changes and calls refresh when changed.
		 */
		monitor: function() {
			if ( !_self.monitorTimer ) {
				rate = (_self.settings.monitor == Number) ? _self.settings.monitor : 250;
				_self.currentHeight = _self.$content.outerHeight();
				_self.monitorTimer = setInterval( _self.monitor, rate );
				_self.monitor();
			} else {
				if ( _self.callbacks.monitor && _self.callbacks.monitor() === false ) return;
				if ( _self.currentHeight != _self.$content.outerHeight() ) {
					_self.currentHeight = _self.$content.outerHeight();
					_self.refresh();
				}
			}
		},

		/**
		 * Stops the monitoring of the scroll window.
		 */
		unmonitor: function() {
			clearInterval( this.monitorTimer );
		},

		/**
		 * Prepares relative links to work within the scroll window.
		 *
		 * @param String|HTMLElement|jQuery context The parent of the relative a tags to be setup to work with the scroll window. 
		 *                                          Defaults to the content of the scroll window.
		 */
		setupRelativeLinks: function(context) {
			$('a[@href^="#"]', context || this.$content)
				.each(function() {
					if ( this._relativeSetup ) return;
					if ( this.hash.length > 1 ) {
						this._relativeSetup = true;
						$(this)
							.bind('click', function() {
								element = $(this.hash + ', a[@name=' + this.href.split("#")[1] + ']')[0];
								if ( element ) _self.jumpTo(element);
								return false;
							});
					}
				});
		},

		/**
		 * Jumps to an element or a position in the scroll window.
		 *
		 * @param Number|HTMLElement to Either a number that represents a Y-Coordinate or an HTMLElement to jump to.
		 */
		jumpTo: function(to) {
			if ( this.$window.is('.noScrollBar') ) return;
			if ( typeof to != 'number' ) to = ( $(to).offset().top - this.$window.offset().top );

			to = Math.min( Math.max(to, 0), (this.$content.outerHeight() - this.$window.height()) );

			this.$content.css('top', to*-1);
			this.$slider .css('top', to*this.sliderPixels);
		}	
	});

	/**
	 * Adds HTML to the bottom of the scroll window. Acts just like the append method found in jQuery core.
	 * 
	 * @name append
	 */
	/**
	 * Adds HTML to the top of the scroll window. Acts just like the prepend method found in jQuery core.
	 * 
	 * @name prepend
	 */
	/**
	 * Replaces the HTML in the scroll window. Acts just like the html method found in jQuery core.
	 * 
	 * @name html
	 */
	/**
	 * Clears the HTML in the scroll window. Acts just like the empty method found in jQuery core.
	 * 
	 * @name empty
	 */
	$.each( ("append,prepend,html,empty").split(","), function(i,o){
		_self[o] = function(html) {
			_self.$content[o](html);
			_self.refresh();
		};
	});

	if (this.settings.autoEnable) this.enable();

/*	$(':input', this.$content)
		.bind('focus', this.removeEvents)
		.bind('blur', this.addEvents);*/

	return this;
};

$.fn.scrollWindow = function(settings, callbacks) {
	return new $.ScrollWindow(this[0], settings, callbacks);
};

})(jQuery);