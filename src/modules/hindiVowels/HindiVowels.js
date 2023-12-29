import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline"

const HindiVowels = () => {

    const hindiVovels = ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ", "अं", "अः"]


    return (
        <div className="mt-20 mb-20">
            <div className="px-4 lg:px-0 xl:px-0 2xl:px-0">
                <p className="font-semibold text-gray-400">Learn</p>
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-300 md:text-3xl ">Hindi - स्वर (Vowels)</h1>
            </div>

            {/* <div className="flex flex-column flex-wrap justify-start md:justify-center lg:justify-center gap-5 mt-10">
                {
                    hindiVovels.map((item) => (
                        <div className="mb-2 flex flex-row items-baseline px-4">
                            <p className="text-gray-400 text-5xl">{item}</p>
                        </div>
                    ))
                }
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
                <div className="flex flex-column flex-wrap justify-start md:justify-center lg:justify-center gap-5 mt-10">
                    {
                        hindiVovels.map((item, index) => (
                            <div key={index} className="flex flex-row px-4">
                                <p className="text-gray-400 text-5xl">{ item }</p>
                            </div>
                        ))
                    }
                </div>

                <div className="mt-5 lg:mt-0 relative">
                    <iframe width="100%" height="324" className="rounded-2xl" src="https://www.youtube-nocookie.com/embed/2MK-_JlFprw?si=Pb6MwquKvTGO58zk&amp;start=26" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default HindiVowels