import React from "react"
import PropTypes from "prop-types";
import { Toaster } from 'react-hot-toast';

const Body = ({ children }) => {
    return (
        <main>
            <div><Toaster/></div>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <>{children}</>
            </div>
        </main>
    )
}

Body.defaultProps = {
    children: null,
}

Body.propTypes = {
    children: PropTypes.element
}

export default Body