import React from "react"
import Draggable from "react-draggable"
import what from "../images/what.svg"
import devicehome from "../images/devicehome.png"
import video from "../images/videoplaceholder.png"
import illone from "../images/illone.png"
import illtwo from "../images/illtwo.png"
import goal from "../images/goal.svg"


class Hero extends React.Component {
    


//   componentDidMount() {
//   }
  render() {
    return (
      <div className="heroBG">
          <div className="six-column-grid">
          <Draggable>
          <div className="drag-wrapper">
            <div>
                <img id="target" onMouseDown={this.handleMouseDown()} className="home-image" src={what} alt="home" />
            </div>
          </div>
        </Draggable>
        <Draggable>
          <div className="drag-wrapper">
            <div>
                <img  className="home-image" src={illone} alt="home" />
            </div>
          </div>
        </Draggable>
        <Draggable>
          <div className="drag-wrapper">
            <div>
            <img  className="home-image" src={devicehome} alt="home" />
            </div>
          </div>
        </Draggable>
        <Draggable>
          <div className="drag-wrapper">
            <div>
            <img  className="home-image" src={video} alt="home" />
            </div>
          </div>
        </Draggable>
        <Draggable>
          <div className="drag-wrapper">
            <div>
            <img  className="home-image" src={goal} alt="home" />
            </div>
          </div>
        </Draggable>
        <Draggable>
          <div className="drag-wrapper">
            <div>
            <img  className="home-image" src={illtwo} alt="home" />
            </div>
          </div>
        </Draggable>
          </div>

      </div>
    )
  }
}

export default Hero
