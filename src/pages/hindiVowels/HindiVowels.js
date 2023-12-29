import React from "react"

import Nav from "../../layout/Nav"
import Body from "../../layout/Body"
import Footer from "../../layout/Footer"

import HindiVowels from "../../modules/hindiVowels"

const HindiVowelsPage = () => {
    return (
        <>
            <Nav />
            <Body>
                <HindiVowels />
            </Body>
            <Footer />
        </>
    )
}

export default HindiVowelsPage