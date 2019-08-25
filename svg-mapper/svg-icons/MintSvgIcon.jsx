import React from "react";

// common svg icon styles
import "./svg-icons.scss";

const MintSvgIcon = () => {
    return (
        <svg
            id="Mint"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            className="svg-baseline"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g transform="scale(0.9)">
                <circle cx="14.278" cy="14" r="14" fill="#00A6A4" />
                <path
                    fill="#FFF"
                    d="M14.278 3.888c-.922.925-7.244 7.432-7.244 12.502 0 3.608 2.877 4.805 7.244 7.776 4.367-2.971 7.244-4.168 7.244-7.776 0-5.07-6.322-11.577-7.244-12.502zm-.158 17.743l-.69-.451c-3.488-2.272-4.373-3.039-4.373-4.79 0-2.8 2.715-6.666 5.063-9.36v14.6z"
                />
            </g>
        </svg>
    );
};

export default MintSvgIcon;
