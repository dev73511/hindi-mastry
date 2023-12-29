import React, { useCallback, useEffect, useState } from "react";
import { useSpeechSynthesis } from 'react-speech-kit'

import NumberList from "../../../../shared/components/numberList/NumberList";

const HindiNumbers = () => {

    return (
        <div className="mt-20 mb-10">
            <div className="px-4 lg:px-0 xl:px-0 2xl:px-0">
                <p className="font-semibold text-gray-400">Learn</p>
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-300 md:text-3xl ">Hindi Numbers from 1 to 100</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-8">
                <NumberList start={1} end={10} />
                <NumberList start={11} end={20} />
                <NumberList start={21} end={30} />
                <NumberList start={31} end={40} />
                <NumberList start={41} end={50} />
                <NumberList start={51} end={60} />
                <NumberList start={61} end={70} />
                <NumberList start={71} end={80} />
                <NumberList start={81} end={90} />
                <NumberList start={91} end={100} />

            </div>

        </div>
    )
}

export default HindiNumbers