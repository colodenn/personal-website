import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header className="flex justify-between">
     
    <div>
      <h5 className="font-gilroy leading-tight text-sm">

      codenn
      </h5>
    </div>
    <div>
      <h5 className="font-gilroy leading-tight text-sm">

      say hi.
      </h5>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
