import Body from "../../layout/Body"
import Footer from "../../layout/Footer"
import Nav from "../../layout/Nav"
import HindiDirections from "../../modules/hindiDirections/HindiDirections"

const HindiDirectionsPage = () => {
    return(
        <>
            <Nav />
            <Body>
                <HindiDirections />
            </Body>
            <Footer />
        </>
    )
}

export default HindiDirectionsPage