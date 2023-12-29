import React from "react"
import Body from "../../layout/Body"
import Nav from "../../layout/Nav"
import HindiNumberGame from "../../modules/hindiNumberGame"

const HindiNumberGamePage = () => {
    return (
        <React.Fragment>
            <Nav />
            <Body>
                <HindiNumberGame />
            </Body>
        </React.Fragment>

    )
}

export default HindiNumberGamePage