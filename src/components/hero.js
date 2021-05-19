import React from "react"
import Draggable from "react-draggable"
import what from "../images/what.svg"
import devicehome from "../images/devicehome.png"
import video from "../images/videoplaceholder.png"
import illone from "../images/illone.png"
import illtwo from "../images/illtwo.png"
import goal from "../images/goal.svg"
import { Link } from "gatsby"

import homebutton from "../images/homebutton.svg"

class Hero extends React.Component {
  //   componentDidMount() {
  //   }
  render() {
    return (
      <div className="heroBG">
        <div style={{ display: "flex", width: "100%" }}>
          <span className="outline-text-hero">holo-cloud</span>
          <div className="home-nav">
            <Link className="home-button-light" to="/buynow">
              Buy Now
            </Link>
            <Link className="home-button" to="/faq">
              FAQ
            </Link>
            <Link className="home-button" to="/team">
              Our Team
            </Link>
            <Link
              className="home-button"
              target="_blank"
              to="https://quiz.holo-cloud.com"
            >
              Take Our Quiz!
            </Link>
          </div>
        </div>
        <div className="six-column-grid">
          <Draggable>
            <div className="drag-wrapper">
              <div>
                <img id="target" className="home-image" src={what} alt="home" />
              </div>
            </div>
          </Draggable>
          <Draggable>
            <div className="drag-wrapper">
              <div>
                <img className="home-image" src={illone} alt="home" />
              </div>
            </div>
          </Draggable>
          <Draggable>
            <div className="drag-wrapper">
              <div>
                <img className="home-image" src={devicehome} alt="home" />
              </div>
            </div>
          </Draggable>
          <Draggable>
            <div className="drag-wrapper">
              <div>
                <img className="home-image" src={video} alt="home" />
              </div>
            </div>
          </Draggable>
          <Draggable>
            <div className="drag-wrapper">
              <div>
                <img className="home-image" src={goal} alt="home" />
              </div>
            </div>
          </Draggable>
          <Draggable>
            <div className="drag-wrapper">
              <div>
                <img className="home-image" src={illtwo} alt="home" />
              </div>
            </div>
          </Draggable>
        </div>
        <div className="home-button-circle">
          <Link to="/features">
            <img src={homebutton} />
          </Link>
        </div>
      </div>
    )
  }
}

export default Hero
