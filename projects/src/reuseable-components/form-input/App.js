import React from "react";
import Input from "./Input";

export default function App(){
    return(
        <>
            {/* <h1> Input with different Sizes </h1>
            <Input size="xs" placeholderText ="Extra Small" />
            <Input size="sm" placeholderText ="Small" />
            <Input size="md" placeholderText ="Medium" />
            <Input size="lg" placeholderText ="Large" />
            <br /> */}
            <h1> Input with different Variants </h1>
            <Input variant="outline" placeholderText ="Outline" />
            <Input variant="filled" placeholderText ="Filled" />
            <Input variant ="flushed" placeholderText = "flushed" />
            <Input variant="outline" placeholderText ="outline" leftaddons="https://" />
        </>
    )
}