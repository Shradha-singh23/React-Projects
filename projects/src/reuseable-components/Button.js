import React, { useState } from "react";

const backgroundColors = {
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
        bgColor: "#97C1A9"
    },
    outline: {
        border: "2px solid",
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
    variant,
    rightIcon,
    leftIcon,
    loadingText,
    isLoading
})
{
    const [toggle, setToggle] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleOnMouseEnter(){
        if(variant && variant !== "solid"){
            setToggle(true)
        }
    }

    function handleOnMouseLeave(){
        if(variant && variant !== "solid")
        setToggle(false)
    }

    function setBgColor(){
        if(toggle && variant !== "link"){
            return "#AEC6CF";
        }
        if(loading){
            return "#cfcfc4"
        }
        if(bgcolor && variant){
            return btnVariants[variant].bgColor;
        }
        
        if(backgroundColors[bgcolor]){
            return backgroundColors[bgcolor];
        }
        if(btnVariants[variant] && !toggle){
            return btnVariants[variant].bgColor;
        }
        if(variant === "link"){
            return "white";
        }
        return backgroundColors.primary;
    }

    function setTextColor(){
        if(btnVariants[variant] && variant !== "solid"){
            return "#36454F";
        }
        return "white";
    }

    function setBorderColor(){
        if(variant === "outline"){
            if(bgcolor && backgroundColors[bgcolor])
            return backgroundColors[bgcolor];
        } 
        return backgroundColors.primary;
    }

    function handleOnClick(){
        console.log("clicked")
        if(isLoading){
            setLoading(true);
            setBgColor();
        }
        console.log(loading);
    }
    
    return(
        <button
            style={{
                fontWeight: 400,
                padding: btnSize[size]? btnSize[size].padding : btnSize.default.padding,
                cursor: "pointer",
                transition: "transform 0.3s ease",
                backgroundColor: setBgColor(),
                color: setTextColor(),
                marginLeft: "20px",
                marginTop:"10px",
                fontSize: "20px",
                width: btnSize[size]? btnSize[size].width :btnSize.default.width,
                borderRadius: isRoundedCorners ? "10px" : "0px",
                border: btnVariants[variant] ? btnVariants[variant].border : "none",
                textDecoration: (variant === "link" && toggle) ? "underline" : "none",
                borderColor: setBorderColor()
            }}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            disabled={loading}
            onClick={handleOnClick}
        >
            { leftIcon && <i class={`fas fa-${leftIcon}`} style={{paddingRight:"10px"}}></i> }
            { loading && <i class={`fas fa-spinner`} style={{paddingRight:"10px"}}></i> }
            { loading ? loadingText : children }
            { rightIcon && <i class={`fas fa-${rightIcon}`} style={{paddingLeft:"5px"}}></i> }
        </button>
    );
}