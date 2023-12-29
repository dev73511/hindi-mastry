import Body from "../../layout/Body"
import Footer from "../../layout/Footer"
import Nav from "../../layout/Nav"
import HindiConsonants from "../../modules/hindiConsonants/HindiConsonants"

const HindiConsonantsPage = () => {
    return (
        <>
            <Nav />
            <Body>
                <HindiConsonants />
            </Body>
            <Footer />
        </>
    )
}

export default HindiConsonantsPage