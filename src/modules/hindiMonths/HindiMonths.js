import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline"


const HindiMonths = () => {
    const [months, setMonths] = useState([
        {
            id: uuidv4(),
            name: "January",
            inHindi: "जनवरी",
            accordingToHinduCalander: "पौष"
        },
        {
            id: uuidv4(),
            name: "February",
            inHindi: "फरवरी",
            accordingToHinduCalander: "माघ"
        },
        {
            id: uuidv4(),
            name: "March",
            inHindi: "मार्च",
            accordingToHinduCalander: "फाल्गुन"
        },
        {
            id: uuidv4(),
            name: "April",
            inHindi: "अप्रैल",
            accordingToHinduCalander: "चैत्र"
        },
        {
            id: uuidv4(),
            name: "May",
            inHindi: "मई",
            accordingToHinduCalander: "वैशाख"
        },
        {
            id: uuidv4(),
            name: "Jun",
            inHindi: "जून",
            accordingToHinduCalander: "ज्येष्ठा"
        },
        {
            id: uuidv4(),
            name: "July",
            inHindi: "जुलाई",
            accordingToHinduCalander: "आषाढ़"
        },
        {
            id: uuidv4(),
            name: "August",
            inHindi: "अगस्त",
            accordingToHinduCalander: "श्रावण"
        },
        {
            id: uuidv4(),
            name: "September",
            inHindi: "सितम्बर",
            accordingToHinduCalander: "भाद्रपद"
        },
        {
            id: uuidv4(),
            name: "October",
            inHindi: "अक्टूबर",
            accordingToHinduCalander: "अश्विन"
        },
        {
            id: uuidv4(),
            name: "November",
            inHindi: "नवंबर",
            accordingToHinduCalander: "कार्तिक"
        },
        {
            id: uuidv4(),
            name: "December",
            inHindi: "दिसंबर",
            accordingToHinduCalander: "मार्गशीर्ष"
        },
    ])
    return (
        <>
            <div className="mt-20 mb-10">
                <div className="px-4 lg:px-0 xl:px-0 2xl:px-0">
                    <p className="font-semibold text-gray-400">Learn</p>
                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-300 md:text-3xl ">Hindi - महीने (Months)</h1>
                </div>

                <div>
                    <ul className="mt-6 text-gray-400 lg:-ml-4">
                        {
                            months.map((item) => (
                                <li key={item.id} className="mb-2 flex flex-row items-baseline px-4">
                                    <ChevronDoubleRightIcon className="block h-5 w-5 md:h-5 md:w-5 lg:h-6 lg:w-6 mr-2" />
                                    <p className="text-2xl md:text-3xl lg:text-3xl">
                                        {item.name} - {item.inHindi} ( {item.accordingToHinduCalander} )
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HindiMonths