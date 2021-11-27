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

    const getButtonStyles = () => {
        const style = {
            fontWeight: 400,
            padding: btnSize.default.padding,
            cursor: "pointer",
            transition: "transform 0.3s ease",
            backgroundColor: backgroundColors.primary,
            color: "white",
            marginLeft: "20px",
            marginTop: "10px",
            fontSize: "20px",
            width: btnSize.default.width,
            borderRadius: "0px",
            border: "none",
            textDecoration: "none",
            borderColor: backgroundColors.primary
        }
        if(btnVariants[variant]){
            style.border = btnVariants[variant].border;
        }
        if(variant === "link" && toggle){
            style.textDecoration = "underline";
        }
        if(isRoundedCorners){
            style.borderRadius = "10px";
        }
        if(btnSize[size]){
            style.padding = btnSize[size].padding;
            style.width = btnSize[size].width;
        }
        if(toggle && variant !== "link"){
            style.backgroundColor = "#AEC6CF";
        }
        if(loading){
            style.backgroundColor = "#cfcfc4";
        }
        if(bgcolor && variant){
            style.backgroundColor = btnVariants[variant].bgColor;
        }
        if(backgroundColors[bgcolor]){
            style.backgroundColor = backgroundColors[bgcolor];
        }
        if(btnVariants[variant] && !toggle){
            style.backgroundColor = btnVariants[variant].bgColor;
        }
        if(variant === "link"){
           style.backgroundColor = "white";
        }
        if(btnVariants[variant] && variant !== "solid"){
            style.color = "#36454F";
        }
        if(variant === "outline"){
            if(bgcolor && backgroundColors[bgcolor])
            style.borderColor = backgroundColors[bgcolor];
        }
        return style;
    }

    function handleOnMouseEnter(){
        if(variant && variant !== "solid"){
            setToggle(true)
        }
    }

    function handleOnMouseLeave(){
        if(variant && variant !== "solid")
        setToggle(false)
    }

    function handleOnClick(){
        if(isLoading){
            setLoading(true);
            getButtonStyles();
        }
        console.log(loading);
    }
    
    return(
        <button
            style = {getButtonStyles()}
            onMouseEnter = {handleOnMouseEnter}
            onMouseLeave = {handleOnMouseLeave}
            disabled = {loading}
            onClick = {handleOnClick}
        >
            { leftIcon && <i class={`fas fa-${leftIcon}`} style={{paddingRight:"10px"}}></i> }
            { loading && <i class={`fas fa-spinner`} style={{paddingRight:"10px"}}></i> }
            { loading ? loadingText : children }
            { rightIcon && <i class={`fas fa-${rightIcon}`} style={{paddingLeft:"5px"}}></i> }
        </button>
    );
}