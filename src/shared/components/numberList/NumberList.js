import React from "react"
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline"
import { numberToWord } from "../../utils/numberToWord";
import { NUMBER_LOCAL_CODE } from "../../../constants/numberLocalCode";




function generateArray(start, end) {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

const NumberList = (props) => {
    const numbersList = generateArray(props.start, props.end);

    return (
        <ul className="mt-6 text-gray-400 lg:-ml-4">
            {
                numbersList.map((item, index) => (
                    <li key={index} className="mb-2 flex flex-row items-baseline px-4">
                        <ChevronDoubleRightIcon className="block h-6 w-6 mr-2" />
                        <p className="text-3xl">
                            {
                                `${item} ${numberToWord(NUMBER_LOCAL_CODE.INDIA_HINDI).convert(item)}`
                            }
                        </p>
                    </li>
                ))
            }
        </ul>
    )
}

export default NumberList