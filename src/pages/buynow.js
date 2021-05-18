import * as React from "react"
import { Link } from "gatsby"
import device from "../images/device.png"
import shapes from "../images/shapes.png"
import boxes from "../images/boxes.svg"

import Seo from "../components/seo"

const BuyNow = () => (
    <div className="">
        <Seo title="FAQ" />
        <div className="container">
            <p className="page-subheader">BUY NOW</p>
            <h1 className="page-title">holo-cloud system</h1>
            <p>The holo-hub device is the love child of external hardware and cloud-based storage. This cutting edge module stores any asset you upload to the vault with block-chain RAID configuration technology to fragment it across your devices for the most secure asset storage on the market. We know that sounded like a whole lot of hoopla, basically its the cool, smart, caring, handsome, younger cousin to your current thumb drive. </p>

            <div className="buy-device">
                <div className="pricing">
                    <p className="pricing-p">holo-cloud</p>
                    <span className="money">$110</span>
                    <p>a personal-asset-tracking hologram. enough said.</p>
                </div>
                <img className="device-image" src={device} alt="device" />
            </div>
            <p>View product details</p>
            <div>
                <p>Quantity: <span className="pricing-p">1 holo-hub</span></p>
                <a className="cart-button">Add to Cart</a>
            </div>
        </div>
        <div>
            <img src={shapes} alt="shapes" />
        </div>
        <div className="container">
            <div>
            <p className="page-subheader">SUBSCRIBE NOW</p>
            <h1 className="page-title">storage upgrades</h1>
            <p style={{width:"50%"}}>Your data represents you, whether there is a little or a lot to you we have a monthly holo-cloud storage subscription plan that will fit like a glove. A free 15 gigabyte plan comes with the purchase of the hub and account set up. Our more advanced plans offer more coverage and space for your most precious assets, as well as more complex RAID configuration across your local devices. </p>
            </div>

        <img style={{width:"50%",marginTop:"50px"}} src={boxes} alt="box" />
        <p>View product details</p>
            <div>
                <p>Quantity: <span className="pricing-p">1 holo-hub</span></p>
                <a className="cart-button">Add to Cart</a>
            </div>
        </div>


        {/* <Link to="/">Go back to the homepage</Link> */}
    </div>

)

export default BuyNow
