import React from "react";
import Input from "./Input";

export default function SearchBar(props){
    const {
        variant, 
        label, 
        placeholderText, 
        error, 
        errorCaption, 
        disabled,
        loading,
        size
    } = props ;

    const getLabelStyle = () => {
        const style = {
            margin: "10px",
            fontSize: "20px",
            fontFamily: "Courier New"
        }
        return style;
    }

    return(
        <>
            {label && <label style={getLabelStyle()}>{label}</label>}
            <Input 
                variant={variant} 
                leftIcon="search"
                placeholderText={placeholderText || "Search here..."}
                error={error}
                errorCaption={errorCaption}
                disabled={disabled}
                rightIcon={loading ? "spinner" : ""}
                size={size}
            />
        </>
    )    
}