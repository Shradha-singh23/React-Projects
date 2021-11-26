import React from "react";
// import Input from "./Input";
// import Button from "./Button";
// import Avatar from "./Avatar";
import Badge from "./Badge";

export default function App(){
    return(
        <div>
            <h1 style={{marginTop:"10px", fontSize:"25px"}}> Badge Sizes </h1>
            <Badge 
                badgeText="0"
                size="xs"
            />
            <Badge 
                badgeText="10" 
                size="sm"
            />
            <Badge 
                badgeText="100" 
                size="md"   
            />
            <Badge 
                badgeText="1000"
                size="lg"
            />
            <h1 style={{marginTop:"10px", fontSize:"25px"}}> Badge Types </h1>
            <Badge 
                badgeText="10"
            />
            <Badge 
                isMini
                badgeText="10"
            />
            <Badge
                isSqaured = "true"
                badgeText="10"
            />
        </div>
    )
}