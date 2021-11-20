import React from "react";

const backgroundColors = {
    default: "blue",
    primary: "#97C1A9",
    secondary: "#CBAACB",
    tertiary: "#744C24"
}

export default function Button({
    children,
    bgcolor,
    buttonSize,
    isRoundedCorners
})
{
    return(
        <button
            style={{
                fontWeight: 400,
                cursor: "pointer",
                transition: "transform 0.3s ease",
                backgroundColor: backgroundColors[bgcolor] || backgroundColors.default,
                color:"white",
                marginLeft: "20px",
                marginTop:"50px",
                fontSize: "30px",
                width: "20%",
                height: "60px",
                borderRadius: isRoundedCorners ? "10px" : "0px"
            }}
        >
            {children}
        </button>
    );
}