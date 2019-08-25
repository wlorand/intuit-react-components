import React from "react";

// common svg icon styles
import "./svg-icons.scss";

const ProConnectSvgIcon = () => {
    return (
        <svg
            id="ProConnect"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            className="svg-baseline"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g transform="scale(0.9)">
                <ellipse
                    cx="13.978"
                    cy="13.535"
                    rx="13.468"
                    ry="13.479"
                    fill="#0077C5"
            />
                <path
                    transform="translate(-78)"
                    fill="#FFF"
                    d="M96.681 6.844a1.047 1.047 0 0 0-.968-.648h-9.868v1.049c0 .579.469 1.048 1.048 1.048h6.291l-8.444 8.452c-.41.41-.41 1.073 0 1.483l.74.741L96.454 7.986c.3-.3.39-.75.227-1.142zm2.028 1.984a1.047 1.047 0 0 0-1.141.227L86.594 20.038l.74.741c.41.41 1.073.41 1.482 0l8.445-8.452v6.298c0 .579.469 1.048 1.048 1.048h1.047V9.796c0-.424-.255-.806-.647-.968z"
                />
            </g>
        </svg>
    );
};

export default ProConnectSvgIcon;
