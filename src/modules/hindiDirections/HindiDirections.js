
import { useState } from "react"
import { v4 as uuid } from "uuid"
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline"

const HindiDirections = () => {

    const [directions, setDirections] = useState([
        {
            id: uuid(),
            name: "North",
            inHindi: "उत्तर",
            inHinglish: "Uttar"
        },
        {
            id: uuid(),
            name: "South",
            inHindi: "दक्षिण",
            inHinglish: "Dakshin"
        },
        {
            id: uuid(),
            name: "West",
            inHindi: "पश्चिम",
            inHinglish: "Paschim"
        },
        {
            id: uuid(),
            name: "East",
            inHindi: "पूर्व",
            inHinglish: "Poorv"
        },
    ])

    const [indications, setIndications] = useState([
        {
            id: uuid(),
            name: "Left",
            inHindi: "बाएं",
            inHinglish: "Baaye",
        },
        {
            id: uuid(),
            name: "Right",
            inHindi: "दाएं",
            inHinglish: "Daaye",
        }
    ])

    return (
        <>
            <div className="mt-20">
                <div className="px-4 lg:px-0 xl:px-0 2xl:px-0">
                    <p className="font-semibold text-gray-400">Learn</p>
                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-300 md:text-3xl ">Hindi - दिशाएँ (Directions)</h1>
                </div>

                <div>
                    <ul className="mt-6 text-gray-400 lg:-ml-4">
                        {
                            directions.map((item) => (
                                <li key={item.id} className="mb-2 flex flex-row items-baseline px-4">
                                    <ChevronDoubleRightIcon className="block h-5 w-5 md:h-5 md:w-5 lg:h-6 lg:w-6 mr-2" />
                                    <p className="text-2xl md:text-3xl lg:text-3xl">
                                        {item.name} - {item.inHindi} ({item.inHinglish})
                                    </p>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
            <div className="mt-20 mb-20">
                <div className="px-4 lg:px-0 xl:px-0 2xl:px-0">
                    <p className="font-semibold text-gray-400">Learn</p>
                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-300 md:text-3xl ">Hindi - संकेत (indication)</h1>
                </div>

                <div>
                    <ul className="mt-6 text-gray-400 lg:-ml-4">
                        {
                            indications.map((item) => (
                                <li key={item.id} className="mb-2 flex flex-row items-baseline px-4">
                                    <ChevronDoubleRightIcon className="block h-5 w-5 md:h-5 md:w-5 lg:h-6 lg:w-6 mr-2" />
                                    <p className="text-2xl md:text-3xl lg:text-3xl">
                                        {item.name} - {item.inHindi} ({item.inHinglish})
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

export default HindiDirections