import React from "react";

interface EmailIconProps extends React.SVGProps<SVGSVGElement> {
    size?: number; // Optional size prop to set width and height
    color?: string; // Optional color prop for the icon
}

const EmailIcon: React.FC<EmailIconProps> = ({ size = 24, color = "currentColor", ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
            {...props}
        >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 13 20 6.01V6H4zm0 2.99V18h16v-9.01L12 15 4 8.99z" />
        </svg>
    );
};

export default EmailIcon;
