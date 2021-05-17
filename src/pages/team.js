import * as React from "react"
import { Link } from "gatsby"
import teampic from "../images/teampic.png"


import Seo from "../components/seo"

const Team = () => (
  <div className="container">
    <Seo title="Our Team" />
    <p className="page-subheader">Our Team</p>
    <h1 className="page-title">Team Cyber</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat convallis nunc ultricies quis. A, tristique velit in gravida purus a pellentesque ultricies. Dui diam integer magna duis mollis turpis. Tortor nulla quam sociis adipiscing egestas sit purus faucibus eget. Cum lectus laoreet in aliquet aenean nisi.</p>
    <img className="team-pic" src={teampic} alt="team cyber" />
    <Link to="/">Go back to the homepage</Link>
  </div>

)

export default Team
