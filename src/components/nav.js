import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.svg"

class Nav extends React.Component {
  //   componentDidMount() {
  //   }
  render() {
    return (
      <div className="nav">
        <div>
        <Link className="nav-item" to="/"><img className="logo" style={{marginBottom:"0"}} src={logo} alt="logo" /></Link>
          
        </div>
        <div className="nav-links">
          <Link className="nav-item" to="/buynow">Buy Now</Link>
          <Link className="nav-item" to="/faq">FAQ</Link>
          <Link className="nav-item" to="/team">Our Team</Link>
          <Link className="nav-item" target="_blank" to="https://quiz.holo-cloud.com">
            Take Our Quiz!
          </Link>
        </div>
      </div>
    )
  }
}

export default Nav
