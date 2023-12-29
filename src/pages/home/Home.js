import React from "react"

import Nav from "../../layout/Nav"
import Body from "../../layout/Body"
import Footer from "../../layout/Footer"

import Home from "../../modules/home"
const HomePage = () => {
    return (
        <>
            <Nav />
            <Body>
                <Home />
            </Body>
            <Footer />
        </>
    )
}

export default HomePage