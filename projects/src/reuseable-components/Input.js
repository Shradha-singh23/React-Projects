import React, { useState } from "react";

const inputSizes = {
    xs: "20px",
    sm: "35px",
    md: "40px",
    lg: "50px"
}
const inputVariant = {
    outline:{
        border : "2px solid"
    },
    filled:{
        backgroundColor: "#DBEBFF"
    },
    flushed:{
        border: "none",
        borderBottom: "2px solid gray"
    },
    unstyled:{
        border: "none"
    }
}

export default function Input(props){
    const {placeholderText, leftAddons, rightAddons, size , variant, leftIcon, rightIcon} = props;

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
            style.border = "none";
            style.borderBottom = "none";
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

    const handleOnFocus = () => {
        setHasFocus(true);
    }

    const handleOnBlur = () => {
        setHasFocus(false);
    }

    return(
        <div style={{
                border: (leftAddons || rightAddons || rightIcon ||leftIcon) ? "2px solid #D1CEBD" : "none",
                width: "50%",
                margin: "10px",
                position: "relative",
                borderRadius: (leftAddons || rightAddons || rightIcon ||leftIcon) ? "5px" : "none"
            }}>
            { leftIcon && <i class={`fas fa-${leftIcon}`} 
                style={{padding:"7px",
                        marginRight:"10px",
                        marginLeft:"10px",
                        position:"relative" 
                }}></i> }
            {leftAddons && <span style={{
                padding:"7px",
                position:"relative" 
                // border:"2px solid gray"
            }}>{leftAddons}</span>}
            <input 
                style={getInputStyles()}
                type="text"
                placeholder={placeholderText}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
            >
            </input>
            {rightAddons && <span style={{
                padding:"7px", 
                position:"relative", 
                left:leftAddons ? "10px" : "70px"
            }}>{rightAddons}</span>}
            { rightIcon && <i class={`fas fa-${rightIcon}`} style={{
                padding:"7px", 
                position:"relative", 
                left:leftIcon ? "25px" : "75px"
            }}></i> }
        </div>
    )
}