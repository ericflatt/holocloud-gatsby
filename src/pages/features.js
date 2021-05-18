import * as React from "react"
import { Link } from "gatsby"
import device from "../images/device.png"
import vault from "../images/yourVault.svg"

import Seo from "../components/seo"

const Features = () => (
  <div className="featuresBG">
    <div className="topBG">
      <Seo title="Core Features" />
      <div style={{textAlign:"center"}}>
        <span className="outline-text">core features</span>
      </div>
      <div className="container your-hub">
        
          <img className="device" src={device} alt="device" />
        
        <div>
          <h1 className="page-title">your hub</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      {/* <Link to="/">Go back to the homepage</Link> */}
    </div>
    <div>
        <img style={{width:"100%"}} src={vault} alt="vault" />
    </div>
  </div>
)

export default Features
