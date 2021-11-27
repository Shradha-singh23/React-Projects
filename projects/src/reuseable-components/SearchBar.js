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

    return(
        <>
            <Input 
                variant={variant} 
                leftIcon="search"
                placeholderText={placeholderText || "Search here..."}
                error={error}
                errorCaption={errorCaption}
                disabled={disabled}
                rightIcon={loading ? "spinner" : ""}
                size={size}
                label={label}
            />
        </>
    )    
}