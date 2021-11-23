import React from "react";
import Input from "./Input";

export default function App(){
    return(
        <>
            <h1> Input with different Sizes </h1>
            <Input size="xs" placeholderText ="Extra Small" />
            <Input size="sm" placeholderText ="Small" />
            <Input size="md" placeholderText ="Medium" />
            <Input size="lg" placeholderText ="Large" />
            <br /> 
            <h1> Input with different Variants </h1>
            <Input variant="outline" placeholderText ="Outline" />
            <Input variant="filled" placeholderText ="Filled" />
            <Input variant ="flushed" placeholderText = "flushed" />
            <Input variant="outline" placeholderText ="outline" />
            <Input variant="outline" placeholderText ="Left Add Ons" leftAddons="https://" />
            <Input variant="outline" placeholderText ="Right Add Ons" rightAddons=".com" />
            <Input placeholderText = "Left and Right AddOns" leftAddons="https://" rightAddons=".com" />
            <Input placeholderText = "Left Icon" leftIcon = "phone"  />
            <Input placeholderText = "Right Icon" rightIcon = "envelope" />
            <Input placeholderText = "Left and Right Icon" rightIcon = "envelope" leftIcon = "phone" />
        </>
    )
}