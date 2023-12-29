import React from "react"
import PropTypes from "prop-types";


const Button = ({onClick, disabled, outline, small,label, icon: Icon}) => {
    return (
        <>
            <button
                type="button"
                onClick={onClick}
                disabled={disabled}
                className={`
                relative
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-lg
                hover:opacity-80
                transition
                w-full
                tracking-[.1em]
                drop-shadow-md 
                hover:drop-shadow-xl
                ${outline ? 'bg-neutral-300' : 'bg-gray-700'}
                ${outline ? 'border-black' : 'border-gray-700'}
                ${outline ? 'text-black' : 'text-gray-300'}
                ${small ? 'py-1' : 'py-3'}
                ${small ? 'text-sm' : 'text-md'}
                ${small ? 'font-light' : 'font-semibold'}
                ${small ? 'border-[1px]' : 'border-2'}
            `}
            >
                {Icon && (
                    <Icon
                        size={24}
                        className="absolute left-4 top-3"
                    />
                )}
                {label}
            </button>
        </>
    )
}

Button.defaultProps = {
    onClick: null,
    disabled: null,
    outline: null,
    small: null,
    label: null,
    icon: null
}

Button.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    icon: PropTypes.element,
    label: PropTypes.string
}


export default Button