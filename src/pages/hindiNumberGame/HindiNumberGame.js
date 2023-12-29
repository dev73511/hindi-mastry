import React from "react"
import Body from "../../layout/Body"
import Footer from "../../layout/Footer"
import Nav from "../../layout/Nav"
import HindiNumberGame from "../../modules/hindiNumberGame"

const HindiNumberGamePage = () => {
    return (
        <React.Fragment>
            <Nav />
            <Body>
                <HindiNumberGame />
            </Body>
            {/* <Footer /> */}
        </React.Fragment>

    )
}

export default HindiNumberGamePage