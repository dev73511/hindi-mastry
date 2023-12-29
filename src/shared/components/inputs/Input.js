import React from "react";
import PropTypes from "prop-types";

const Input = ({ id, type, disabled, label, onChange, onBlur, isInvalid, helperText }) => {
    return (
        <div className="w-full relative">
            <input
                id={id}
                type={type}
                disabled={disabled}
                placeholder=" "
                onChange={(event) => onChange(event)}
                onBlur={(event) => onBlur(event)}
                className={`
                    peer
                    w-full 
                    p-4 
                    pt-6 
                    font-light 
                    text-gray-300
                    bg-gray-900 
                    border-2 
                    rounded-md 
                    outline-none 
                    transition
                    disabled:opacity-20 
                    disabled:cursor-not-allowed
                    border-neutral-500
                    focus:border-neutral-300
                    ${helperText ? 'border-rose-500' : 'border-neutral-300'}
                    ${helperText ? 'focus:border-rose-500' : 'focus:border-black'}
                    `}
            />
            <label
                className={`
                    absolute
                    text-gray-300
                    text-md
                    duration-150
                    transform
                    -translate-y-3
                    top-5
                    z-l0
                    origin-[0]
                    peer-placeholder-shown:scale-l00
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-4
                    left-4
                `}
            >
                {label}
            </label>
            {
                helperText && <p className="text-rose-500">{helperText}</p>
            }
        </div>
    )
}

Input.defaultProps = {
    id: null,
    type: "text",
    disabled: null,
    label: null,
    onChange: null,
    onBlur: null,
    isInvalid: null,
    helperText: null
}

Input.propTypes = {
    id: PropTypes.any,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    isInvalid: PropTypes.any,
    helperText: PropTypes.any
}

export default Input