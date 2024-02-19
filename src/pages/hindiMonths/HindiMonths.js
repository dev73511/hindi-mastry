import React from "react";
import Body from "../../layout/Body";
import Nav from "../../layout/Nav";
import HindiMonths from "../../modules/hindiMonths/HindiMonths";
import Footer from "../../layout/Footer";


const HindiMonthsPage = () => {
    return (
        <React.Fragment>
            <Nav />
            <Body>
                <HindiMonths />
            </Body>
            <Footer />
        </React.Fragment>
    )
}

export default HindiMonthsPage