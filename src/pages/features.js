import * as React from "react"
import { Link } from "gatsby"
import features from "../images/features.png"

import Seo from "../components/seo"
import Nav from "../components/nav"
import back from "../images/back.svg"
import homebutton from "../images/homebutton.svg"

const Features = () => (
  <div className="featuresBG">
    <Nav />
    {/* <div>
    <Link to="/">
            <img className="back-button" src={back} />
          </Link>
    </div> */}
    <div className="features">
   
      <img src={features} />
    </div>
  </div>
)

export default Features
