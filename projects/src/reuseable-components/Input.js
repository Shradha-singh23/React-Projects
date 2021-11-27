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
        rightIcon,
        error,
        errorCaption,
        disabled,
        onFocus,
        onBlur,
        label
    } = props;

    const [hasFocus, setHasFocus] = useState(false);

    const getInputStyles = () => {
    const style = {
        border: inputVariant.outline.border,
        width: "80%",
        height: inputSizes.sm,
        paddingLeft: "10px",
        borderColor: "#D1CEBD",
        backgroundColor: "white",
        boxShadow: "none",
        outline: "none",
        borderBottom: "2px solid",
        borderBottomColor: "#D1CEBD",
        borderRadius: "5px"
    };
        if(leftAddons || rightAddons || rightIcon ||leftIcon){
            style.border = hasFocus ? "2px solid #D291BC" : "none";
            style.borderBottom = hasFocus ? "2px solid #D291BC" : "none";
            style.borderColor = "none";
        }
        if(hasFocus){
            style.borderColor = "#D291BC";
        }
        if(size){
            style.height =  inputSizes[size];
        }
        if(variant === "flushed" || variant === "unstyled"){
            style.border = inputVariant[variant].border;
        }
        if(variant === "unstyled"){
            style.borderBottom = "none";
        }
        if(variant === "filled"){
            style.backgroundColor = hasFocus ? "white" : inputVariant.filled.backgroundColor;
        }
        if(variant === "flushed"){
            style.borderRadius = "none";
        }
        if(error){
            style.borderColor = hasFocus ? "#D291BC" : "rgba(255, 0, 0, 0.5)";
            style.borderBottomColor = hasFocus ? "#D291BC" : "rgba(255, 0, 0, 0.5)";
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
            borderBottom: "none",
            backgroundColor: "white",
            borderColor: "#D1CEBD"
        }
        if(leftAddons || rightAddons || rightIcon ||leftIcon){  
            style.border = (variant==="flushed" || variant==="unstyled") 
                            ? inputVariant[variant].border
                            : "2px solid";
            style.borderBottom = (variant==="unstyled")? "none" : "2px solid";
            style.borderRadius = (variant==="flushed") ? "none" : "5px";
            if(variant === "filled"){
                style.backgroundColor = hasFocus ? "white" : inputVariant.filled.backgroundColor;
            }
            if(error){
                style.borderColor= hasFocus ? "#D1CEBD" : "rgba(255, 0, 0, 0.5)";
            }
        }
        return style;
    }

    const getLeftIconStyle = () => {
        const style = {
            padding: "7px",
            paddingLeft:"10px",
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

    const getErrorStyle = () => {
        const style = {
            color: "rgba(255, 0, 0, 0.5)",
            margin: "10px",
        }
        return style;
    }

    const getLabelStyle = () => {
        const style = {
            margin: "10px",
            fontSize: "20px",
            fontFamily: "Courier New"
        }
        return style;
    }

    const handleOnFocus = () => {
        setHasFocus(true);
        if(onFocus) onFocus();
    }

    const handleOnBlur = () => {
        setHasFocus(false);
        if(onBlur) onBlur();
    }

    return(
        <>
            {label && <label style={getLabelStyle()}>{label}
            <div style={getDivContainerStyle()}>
                {leftIcon && <i class={`fas fa-${leftIcon}`} style={getLeftIconStyle()}></i> }
                {leftAddons && <span style={getLeftAddOnsStyle()}>{leftAddons}</span>}
                <input 
                    style={getInputStyles()}
                    type={type} 
                    placeholder={placeholderText}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    disabled={disabled}
                >
                </input>
                {rightAddons && <span style={getRightAddOnsStyle()}>{rightAddons}</span>}
                {rightIcon && <i class={`fas fa-${rightIcon}`} style={getRightIconStyle()}></i>}
            </div>
            {error && <p style={getErrorStyle()}>{errorCaption}</p>}
            </label>}
        </>
    )
}
Input.defaultProps = {
    errorCaption: "Please try again",
    type: "text",
    placeholderText: "Type here"
}