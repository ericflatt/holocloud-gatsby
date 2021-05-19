import * as React from "react"
import { Link } from "gatsby"
import teampic from "../images/teampic.png"
import Nav from "../components/nav"

import Seo from "../components/seo"

const Team = () => (
  <div>
    <Nav />
    <div className="container">
      <Seo title="Our Team" />
      <p className="page-subheader">Our Team</p>
      <h1 className="page-title">Team Cyber</h1>
      <p>
        Welcome, we are the team at holo-cloud! Four students from the Savannah College of Art and Design all studying User Experience Design. Holo-cloud is our UX Senior Studio capstone project. Over the course of the past 20 weeks we out a lot of time and effort into this project. Hope you like it!
      </p>
      <img className="team-pic" src={teampic} alt="team cyber" />
      <Link to="/">Go back to the homepage</Link>
    </div>
  </div>
)

export default Team
