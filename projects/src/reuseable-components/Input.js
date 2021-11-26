import React, { useState } from "react";

const inputSizes = {
    xs: "20px",
    sm: "35px",
    md: "40px",
    lg: "50px"
}
const inputVariant = {
    outline: {
        border : "2px solid"
    },
    filled: {
        backgroundColor: "#DBEBFF"
    },
    flushed: {
        border: "none",
        borderBottom: "2px solid gray"
    },
    unstyled: {
        border: "none"
    }
}

export default function Input(props){
    const {
        placeholderText, 
        type,
        leftAddons, 
        rightAddons, 
        size , 
        variant, 
        leftIcon, 
        rightIcon
    } = props;

    const [hasFocus, setHasFocus] = useState(false);

    const getInputStyles = () => {
    const style = {
        border: inputVariant.outline.border,
        width: "80%",
        height: inputSizes.sm,
        paddingLeft:"10px",
        borderColor: "#D1CEBD",
        backgroundColor: "white",
        boxShadow: "none",
        outline: "none",
        borderBottom: "2px solid #D1CEBD",
        borderRadius: "5px"
    };
        if(leftAddons || rightAddons || rightIcon ||leftIcon){
            style.border = hasFocus ? "2px solid #D291BC" : "none";
            style.borderBottom = hasFocus ? "2px solid #D291BC" : "none";
        }
        if(hasFocus){
            style.borderColor = "#D291BC";
        }
        if(size){
            style.height =  inputSizes[size]
        }
        if(variant === "flushed" || variant === "unstyled"){
            style.border = inputVariant[variant].border
        }
        if(variant === "unstyled"){
            style.borderBottom = "none"
        }
        if(variant === "filled"){
            style.backgroundColor = hasFocus ? "white" : inputVariant.filled.backgroundColor;
        }
        if(variant === "flushed"){
            style.borderRadius = "none"
        }
        return style;
    };

    const getDivContainerStyle = () => {
        const style = {
            border: "none",
            width: "50%",
            margin: "10px",
            position: "relative",
            borderRadius: "none",
            borderBottom: "none"
        }
        if(leftAddons || rightAddons || rightIcon ||leftIcon){  
            style.border = (variant==="flushed" || variant==="unstyled") 
                            ? inputVariant[variant].border
                            : "2px solid #D1CEBD";
            style.borderBottom = (variant==="unstyled")? "none" : "2px solid #D1CEBD";
            style.borderRadius = (variant==="flushed") ? "none" : "5px"
        }
        return style;
    }

    const getLeftIconStyle = () => {
        const style = {
            padding: "7px",
            marginRight: leftIcon ? "10px" : "0px",
            marginLeft: leftIcon ? "10px" : "0px",
            position: "relative",
            width:"7%"
        }
        return style;
    }

    const getRightIconStyle = () => {
        const style = {
            padding: "7px",  
            position: "relative",
            left:leftIcon ? "28px" : "92px",
            width:"7%"
        }
        return style;
    }

    const getLeftAddOnsStyle = () => {
        const style = {
            padding: "7px",
            position: "relative"
        }
        return style;
    }
    const getRightAddOnsStyle = () => {
        const style = {
            padding: "7px",
            position: "relative",
            left: leftAddons ? "19px" : "78px"  
        }
        return style;
    }

    const handleOnFocus = () => {
        setHasFocus(true);
    }

    const handleOnBlur = () => {
        setHasFocus(false);
    }

    return(
        <div style={getDivContainerStyle()}>
            {leftIcon && <i class={`fas fa-${leftIcon}`} style={getLeftIconStyle()}></i> }
            {leftAddons && <span style={getLeftAddOnsStyle()}>{leftAddons}</span>}
            <input 
                style={getInputStyles()}
                type={type || "text"} 
                placeholder={placeholderText || "Type Here"}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
            >
            </input>
            {rightAddons && <span style={getRightAddOnsStyle()}>{rightAddons}</span>}
            { rightIcon && <i class={`fas fa-${rightIcon}`} style={getRightIconStyle()}></i> }
        </div>
    )
}