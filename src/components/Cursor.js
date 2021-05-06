import * as React from "react"
import  {useState, useEffect} from 'react'
import classNames from "classnames";

const Cursor = () => {
    const [linkHovered, setLinkHovered] = useState(false);
    const [hiHovered, setHiHovered] = useState(false);

    const [position, setPosition] = useState({x: 0, y: 0});
    const [clicked, setClicked] = useState(false);
    const [hidden, setHidden] = useState(false);
      useEffect(() => {
        addEventListeners();
        handleLinkHoverEvents();
        handleHiHoverEvents();
           return () => removeEventListeners();
       }, []);
       const handleLinkHoverEvents = () => {
               document.querySelectorAll("a").forEach(el => {

                   el.addEventListener("mouseover", () => {
                       
                    setLinkHovered(true)
                   }
                    );
                   el.addEventListener("mouseout", () => setLinkHovered(false));
               });
            
           };

    const handleHiHoverEvents = () => {
     
            document.querySelectorAll(".hi").forEach(el => {
             el.addEventListener("mouseover", () => {
                setHiHovered(true)
            });
             el.addEventListener("mouseout", () => setHiHovered(false));
         });
        };
       const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
       };
    
       const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
       };
    
       const onMouseMove = (e) => {
           setPosition({x: e.clientX, y: e.clientY});
       };   

          const onMouseDown = () => {
           setClicked(true);
           };
        
           const onMouseUp = () => {
               setClicked(false);
      };
      const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };

      const cursorClasses = classNames(
          'cursor',
          {
            'cursor--clicked': clicked,
            'cursor--link-hovered': linkHovered,

          }
      )

      const cursorDotClasses = classNames(
        'cursor-dot',
        {
          'cursor-dot--link-hovered': linkHovered,
          'cursor--cursor-dot-hovered': hiHovered


        }
      )
      
      const textClasses = classNames(
        'text',
        {
          'text--hi-hovered': hiHovered,

        }
      )
      
      const cursorHandClasses = classNames(
        'hand',
        {
          'hand--hand-hovered': hiHovered 
        }
      )

    return (
        <><div className="mobile">

        
        <div style={{'zIndex': '10000000000000000'}} className="text " className={textClasses} style={{ left: `${position.x}px`, top: `${position.y}px`}}>

          <p className="textp font-gilroy ">
                    don't be shy
                </p>
        </div>
            <div style={{'zIndex': '10000000000000000'}} className="cursor flex" className={cursorClasses} style={{ left: `${position.x}px`, top: `${position.y}px`}}>
              
            </div>
            <div className="cursor-dot"  style={{'zIndex': '10000000000000000'}} className={cursorDotClasses} style={{ left: `${position.x}px`, top: `${position.y}px`}}>
                <div className="hand " style={{'zIndex': '10000000000000000'}} className={cursorHandClasses} >
                  <img className="wave " style={{'zIndex': '10000000000000000', 'width': '300%', 'height': '300%'}} src="https://cdn.shopify.com/s/files/1/1061/1924/products/Waving_Hand_Sign_Emoji_Icon_ios10_large.png?v=1571606113" />
                </div>
             
            </div>
            </div>
        </>
    )
}

export default Cursor;