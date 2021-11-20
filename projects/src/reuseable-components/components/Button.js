import React, { useState } from "react";

const backgroundColors = {
    default: "blue",
    primary: "#97C1A9",
    secondary: "#CBAACB",
    tertiary: "#744C24"
}

const btnSize = {
    default: {
        padding:"10px",
        width: "10%"
    },
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

const btnVariants = {
    solid:{
        border: "none",
        bgColor: "#E8DFD5"
    },
    outline: {
        border: "2px solid teal",
        bgColor: "white"
    },
    ghost :{
        border: "none",
        bgColor: "white"
    },
    link :{
        border: "none",
        bgColor: "white"
    }
}

export default function Button({
    children,
    bgcolor,
    buttonSize,
    isRoundedCorners,
    size,
    variant
})
{
    const [toggle, setToggle] = useState(false);

    function handleOnMouseEnter(){
        if(btnVariants[variant]){
            setToggle(true)
        }
    }

    function handleOnMouseLeave(){
        if(btnVariants[variant])
        setToggle(false)
    }

    function setBgColor(){
        if(backgroundColors[bgcolor]){
            return backgroundColors[bgcolor];
        }
        if(btnVariants[variant] && !toggle){
            return btnVariants[variant].bgColor;
        }
        if(toggle && variant !== "link"){
            return "#FDF9F2";
        }
        if(variant === "link"){
            return "white";
        }
        return backgroundColors.default;
    }
    
    return(
        <button
            style={{
                fontWeight: 400,
                padding: btnSize[size]? btnSize[size].padding : btnSize.default.padding,
                cursor: "pointer",
                transition: "transform 0.3s ease",
                backgroundColor: setBgColor(),
                color:btnVariants[variant] ? "#36454F" : "white",
                marginLeft: "20px",
                marginTop:"10px",
                fontSize: "20px",
                width: btnSize[size]? btnSize[size].width :btnSize.default.width,
                borderRadius: isRoundedCorners ? "10px" : "0px",
                border: btnVariants[variant] ? btnVariants[variant].border : "none",
                textDecoration: (variant === "link" && toggle) ? "underline" : "none"
            }}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
        >
            {children}
        </button>
    );
}