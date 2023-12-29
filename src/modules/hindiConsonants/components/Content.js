import React from "react"
import PropTypes from "prop-types";

const Content = (props) => {
    return (
        <div className="flex flex-column flex-wrap justify-start md:justify-center lg:justify-center gap-1 mt-2">
            {
                props?.content?.map((item, index) => (
                    <div key={index} className="mb-2 flex flex-row items-baseline px-4">
                        <p className="text-gray-400 text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">{item}</p>
                    </div>
                ))
            }
        </div>
    )
}

Content.defaultProps = {
    children: null,
}

Content.propTypes = {
    children: PropTypes.element
}
export default Content