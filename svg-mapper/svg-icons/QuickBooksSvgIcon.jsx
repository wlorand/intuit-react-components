import React from "react";

// common svg icon styles
import "./svg-icons.scss";

const QuickBooksSvgIcon = () => {
    return (
        <svg
            id="QuickBooks"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            className="svg-baseline"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g transform="scale(0.9)">
                <ellipse
                    cx="13.819"
                    cy="14.008"
                    rx="13.197"
                    ry="13.313"
                    fill="#2CA01C"
                />
                <path
                    fill="#FFF"
                    d="M4.286 14.008c0 2.86 2.298 5.177 5.133 5.177h.733v-1.923h-.733c-1.78 0-3.226-1.46-3.226-3.254s1.447-3.254 3.226-3.254h1.761v10.058c0 1.063.854 1.924 1.907 1.924V8.83H9.419c-2.835 0-5.133 2.319-5.133 5.178zM18.22 8.83h-.733v1.923h.733c1.779 0 3.226 1.46 3.226 3.255 0 1.794-1.447 3.254-3.226 3.254h-1.762V7.204a1.915 1.915 0 0 0-1.906-1.923v13.905h3.668c2.835 0 5.132-2.318 5.132-5.177 0-2.86-2.297-5.178-5.132-5.178z"
                />
            </g>
        </svg>
    );
};

export default QuickBooksSvgIcon;
