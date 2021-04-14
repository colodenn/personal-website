import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="cursor flex">
      
    </div>
    <div className="cursor-dot ">
        
      </div>
    <SEO title="Home" />
    <div className="flex">

    <div className="my-auto absolute top-1/2 transform -translate-y-1/2 w-1/3 justify-end flex">
      <p className="font-gilroy-400 text-base leading-6">
        I'm Cornelius Denninger,<br/>
        I like code and design.<br/>
        See you!
      </p>
    </div>
      <div className="absolute left-1/2 transform top-1/2 -translate-x-1/2 -translate-y-1/2">
        <img className="transform scale-75 origin-center" src="https://www.getillustrations.com/packs/3d-illustrations-empty-state-hand-gestures-pack/scenes/_1x/3D,-Support_Giving,-open-hand,-support,-show,-Hand-Gesture,-Hand_md.png" />
      </div>
    </div>


      <div className="inline-block vertical text-center flex justify-center fixed right-0 minus14 bottom-50 mr-4 h-screen">
      <ul className="flex font-gilroy-no text-sm text-gray-400 text-center my-auto">
              <li className="mr-4 ml-4 mt-4 mb-4">
                  github
              </li>
              <li className="mr-4 ml-4 mt-4 mb-4">
                linkedin
              </li>
              <li className="mr-4 ml-4 mt-4 mb-4">
                instagram
              </li>
            </ul>

    </div>
 

    

  </Layout>
)

console.log(typeof document)
if (typeof(document) != 'undefined'){

  const cursor = document.querySelector('.cursor');
  const dot = document.querySelector('.cursor-dot');

  
  document.addEventListener('mousemove', e => {
      cursor.setAttribute('style','top: '+e.pageY + "px; left: "+ e.pageX + "px;")
      dot.setAttribute('style','top: '+e.pageY + "px; left: "+ e.pageX + "px;")

  })
}

export default IndexPage
