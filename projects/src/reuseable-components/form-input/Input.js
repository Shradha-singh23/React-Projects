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
        backgroundColor: "#AEC6CF"
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
    const {placeholderText, leftaddons, rightaddons, size , variant} = props;

    const [hasFocus, setHasFocus] = useState(false);

    const getInputStyles = () => {
    const style = {
        border: inputVariant.outline.border,
        width: "80%",
        height: inputSizes.sm,
        padding: "10px",
        borderColor: "gray",
        backgroundColor: "white",
        boxShadow: "none",
        outline: "none",
        borderBottom: "2px solid gray"
    };
        if(leftaddons || rightaddons){
            style.border = hasFocus ? "2px solid blue" : "none";
            style.borderBottom = "none";
        }
        if(hasFocus){
            style.borderColor = "blue";
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
            console.log(hasFocus)
            style.backgroundColor = hasFocus ? "white" : inputVariant.filled.backgroundColor;
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
                border: (leftaddons || rightaddons) ? "2px solid gray" : "none",
                width: "50%",
                margin: "10px",
                position: "relative",
                backgroundColor: (leftaddons || rightaddons)? "gray" : "none"
            }}>
            {leftaddons && <span style={{
                padding:"7px", 
                backgroundColor:"gray", 
                border:"2px solid gray"
            }}>{leftaddons}</span>}
            <input 
                style={getInputStyles()}
                type="text"
                placeholder={placeholderText}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
            >
            </input>
            {rightaddons && <span style={{
                padding:"7px", 
                backgroundColor:"gray", 
                border:"2px solid gray"
            }}>{rightaddons}</span>}
        </div>
    )
}