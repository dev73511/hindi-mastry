import Body from "../layout/Body"
import Footer from "../layout/Footer"
import Nav from "../layout/Nav"
import HindiNumbers from "../modules/home/components/hindiNumbers/HindiNumbers"


const HindiVowels = () => {
    return(
        <>
            <Nav/>
            <Body>
                <HindiNumbers />
            </Body>
            <Footer />
        </>
    )
}

export default HindiVowels