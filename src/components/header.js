import * as React from "react"
import PropTypes from "prop-types"
import 'animate.css'
const Header = ({ siteTitle }) => (
  <header className="flex justify-between">
     
    <div>
      <h5 className="font-gilroy leading-tight text-sm animate__animated animate__fadeInUp animate__delay-0.5s ">

      codenn
      </h5>
    </div>
    <div className="hi pl-8">
      <h5 className="font-gilroy leading-tight text-sm animate__animated animate__fadeInUp animate__delay-0.5s ">
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
