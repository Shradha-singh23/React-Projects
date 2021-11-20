import React from "react";

const backgroundColors = {
    default: "blue",
    primary: "#97C1A9",
    secondary: "#CBAACB",
    tertiary: "#744C24"
}
const variants = {
    xs: {
        padding: "5px",
        width: "5%"
    },
    sm: {
        padding: "10px",
        width: "8%"
    },
    md: {
        padding: "10px",
        width: "12%"
    },
    lg: {
        padding: "12px",
        width: "15%"
    }
}

export default function Button({
    children,
    bgcolor,
    buttonSize,
    isRoundedCorners,
    size
})
{
    return(
        <button
            style={{
                fontWeight: 400,
                padding: variants[size].padding,
                cursor: "pointer",
                transition: "transform 0.3s ease",
                backgroundColor: backgroundColors[bgcolor] || backgroundColors.default,
                color:"white",
                marginLeft: "20px",
                marginTop:"50px",
                fontSize: "20px",
                width: variants[size].width,
                borderRadius: isRoundedCorners ? "10px" : "0px"
            }}
        >
            {children}
        </button>
    );
}