import Content from "./components/Content";

const HindiConsonants = () => {

    const rowOne = ["क", "ख", "ग", "घ", "ङ"];
    const rowTwo = ["च", "छ", "ज", "झ", "ञ"];
    const rowThree = ["ट", "ठ", "ड", "ढ", "ण"];
    const rowFour = ["त", "थ", "द", "ध", "न"];
    const rowFive = ["प", "फ", "ब", "भ", "म"];
    const rowSix = ["य", "र", "ल", "व"];
    const rowSeven = ["श", "ष", "स", "ह"];
    const rowEight = ["क्ष", "त्र", "ज्ञ"];

    return (
        <div className="mt-20 mb-10">
            <div className="px-4 lg:px-0 xl:px-0 2xl:px-0">
                <p className="font-semibold text-gray-400">Learn</p>
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-300 md:text-3xl ">Hindi - व्यंजन (Consonants)</h1>
            </div>

            <div className="mt-10">
                <Content content={rowOne} />
                <Content content={rowTwo} />
                <Content content={rowThree} />
                <Content content={rowFour} />
                <Content content={rowFive} />
                <Content content={rowSix} />
                <Content content={rowSeven} />
                <Content content={rowEight} />
            </div>

            
        </div>
    )
}

export default HindiConsonants