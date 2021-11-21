import React from "react";
import Button from "./Button"

export default function App(){
    return(
        <div>
            <h1 style={{marginTop:"20px", marginLeft:"20px", fontSize:"30px"}}> Buttons with Different colors </h1>
            <Button> Default </Button>
            <Button bgcolor="primary"> Primary </Button>
            <Button bgcolor="secondary"> Secondary </Button>
            <Button bgcolor="tertiary" variant="outline"> Tertiary </Button>
            <br />
            <h1 style={{marginTop:"20px", marginLeft:"20px", fontSize:"30px"}}> Button with Rounded Corner </h1>
            <Button isRoundedCorners={true}> button </Button>
            <br />
            <h1 style={{marginTop:"20px", marginLeft:"20px", fontSize:"30px"}}> Button with Different Variants </h1>
            <Button variant="solid"> Solid </Button>
            <Button variant="outline"> Outline </Button>
            <Button variant="ghost"> Ghost </Button>
            <Button variant="link"> Link </Button>
        </div>
    )
}