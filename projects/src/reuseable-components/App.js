import React from "react";
import Input from "./Input";
// import Button from "./Button";
// import Avatar from "./Avatar";
// import Badge from "./Badge";

export default function App(){
    return(
        <div>
            <h1 style={{marginTop:"10px", fontSize:"25px"}}> Badge Sizes </h1>
            <Input
                type="text"
                variant = "flushed"
            />
            <Input
                leftAddons = "https://"
                variant = "flushed"
            />
            <Input
                rightAddons = ".com"
            />
            <Input
                leftAddons = "https://"
                rightAddons = ".com"
            />
            <Input
                leftIcon = "envelope"
                rightIcon = "envelope"
            />
            <Input
                leftIcon = "envelope"
            />
            <Input
                rightIcon = "envelope"
            />
        </div>
    )
}