import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cursor from "../components/Cursor"
import 'animate.css'

const IndexPage = () => (
  <Layout>
   <Cursor />
    <SEO title="Home" />
    <div className="flex">

    <div className="my-auto absolute top-1/2 transform -translate-y-1/2 w-1/3 justify-end flex  ">
      <p className="fronttext font-gilroy-400 text-lg leading-6 mr-32 animate__animated animate__fadeInUp animate__delay-0.5s ">
        I'm Cornelius Denninger,<br/>
        I like code and design.<br/>
        See you!
      </p>
    </div>
      <div className="absolute left-1/2 transform top-1/2 -translate-x-1/2 -translate-y-1/2">
        <img className=" origin-center" src="https://assets.website-files.com/5c8b2e2664f8768dfb1ef7ff/5c8b30892c93fb16a25cd4dd_space-butt.gif" />
      </div>
    </div>


      <div className="inline-block vertical text-center flex justify-center fixed right-0 minus14 bottom-50 mr-4 h-screen  ">
      <ul className="flex font-gilroy-no text-sm text-gray-400 text-center my-auto animate__animated animate__fadeInLeft animate__delay-0.5s">
              <li className="mr-4 ml-4 mt-4 mb-4">
                <a className="hover:color-purple-600" href="https://github.com/colodenn">

                  github
                </a>
              </li>
              <li className="mr-4 ml-4 mt-4 mb-4">
                <a className="hover:color-purple-600" href="https://www.linkedin.com/in/cornelius-denninger-98454b169/">
                linkedin

                </a>
              </li>
              <li className="mr-4 ml-4 mt-4 mb-4">
                <a className="hover:color-purple-600" href="https://www.instagram.com/corny_denninger/">
                instagram

                </a>
              </li>
            </ul>

    </div>
 

    

  </Layout>
)




export default IndexPage
