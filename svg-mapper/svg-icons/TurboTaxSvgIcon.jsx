import React from "react";

// common svg icon styles
import "./svg-icons.scss";

const TurboTaxSvgIcon = () => {
    return (
        <svg
            id="TurboTax"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            className="svg-baseline-tt"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g transform="scale(0.8)">
                <circle cx="14.596" cy="14" r="14" fill="#D52B1E" />
                <path
                    fill="#FFF"
                    d="M11.47 19.133a59.608 59.608 0 0 1-4.634-3.71 42.74 42.74 0 0 0-1.466 3.666c2.361 2.004 5.518 4.299 7.685 5.59 2.81-7.274 7.192-12.018 11.388-15.33a10.909 10.909 0 0 0-2.15-3.052A39.207 39.207 0 0 0 11.47 19.133z"
                />
            </g>
        </svg>
    );
};

export default TurboTaxSvgIcon;
