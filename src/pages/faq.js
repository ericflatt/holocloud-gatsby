import * as React from "react"
import { Link } from "gatsby"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import down from "../images/downArrow.svg"
import topbar from "../images/topbar.svg"
import Nav from "../components/nav"

import Seo from "../components/seo"

const FAQ = () => (
<div>
<Nav />
  <div style={{marginTop:"100px",marginBottom:"100px"}} className="container">
    
    <Seo title="FAQ" />
    <p  className="page-subheader">FREQUENTLY ASKED QUESTIONS (FAQ)</p>
    <h1 className="page-title">Your questions, answered.</h1>
    <Accordion>
    <img className="topbar" src={topbar} alt="topbar" />
  <Card>
    <Card.Header>
      <Accordion.Toggle  eventKey="0">
      How does the internet know so much about me?<img className="down-arrow" src={down} alt="down arrow" />
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Well there are a few ways, but basically there are programs running in the background of any website, social media, or application that collects information on you to help improve your experience with their product, but sometimes they take a little more than we realize. The other common way is we put it there ourselves by uploading photos, birthdays, locations and other sensitive information to applications we trust. </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion>
<img className="topbar" src={topbar} alt="topbar" />
<Card>
    <Card.Header>
      <Accordion.Toggle  eventKey="0">
      Why should I care about my data?<img className="down-arrow" src={down} alt="down arrow" />
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Your data is you. At the end of the day, data is just another way to say information and who wants all their information out there in the wind for anyone to see? Not us.  </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion>
<img className="topbar" src={topbar} alt="topbar" />
<Card>
    <Card.Header>
      <Accordion.Toggle  eventKey="0">
      What is Holo?<img className="down-arrow" src={down} alt="down arrow" />
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Holo is the holo-cloud 3D-hologram display. It is a semi-doom form and floats about 6 inches above whatever table or platform you put it on. It shows you where all your data is and makes a really great night light if you're into that.   </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion>
<img className="topbar" src={topbar} alt="topbar" />
<Card>
    <Card.Header>
      <Accordion.Toggle  eventKey="0">
      What is the Vault?<img className="down-arrow" src={down} alt="down arrow" />
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>The Vault is the storage feature within the holo-cloud app. We liked the name because real life vaults are really hard to crack and too heavy to steal so it's kinda a nice metaphor for our High-level security compliant RAID Configuration protocol.    </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion>
<img className="topbar" src={topbar} alt="topbar" />
<Card>
    <Card.Header>
      <Accordion.Toggle  eventKey="0">
      How do they work together?<img className="down-arrow" src={down} alt="down arrow" />
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>The Vault stores and protects your files and Holo shows you where everything is and tracks its level of exposure to security risks. They are like the best two baby-sitters you’ve ever had.    </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion>
<img className="topbar" src={topbar} alt="topbar" />
<Card>
    <Card.Header>
      <Accordion.Toggle  eventKey="0">
      Am I actually at risk?<img className="down-arrow" src={down} alt="down arrow" />
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Um the short answer is yes. The slightly longer answer is there are 104 cyber threats on average per household each month so still yes. (don’t believe us? Check this out: Comcast - 2020 Xfinity Cyber Heath Report)</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
   
  </div>
  </div>
)

export default FAQ
