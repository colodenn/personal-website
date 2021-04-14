/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
<div className="p-14 overflow-hidden h-screen w-screen ">

      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main className="my-auto">{children}</main>
        <div className="fixed bottom-0 left-0 right-0 ">
          <div className="relative flex justify-between px-14 py-4">


          <div>
            <h5 className="font-gilroy leading-tight text-sm">
coding.
            </h5>
          </div>
          <div>
            <h5 className="font-gilroy leading-tight text-sm">

designing.
            </h5>
          </div>
          </div>

        
        </div>
</div>
     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
