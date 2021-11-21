import React from "react";
import Button from "./Button"

export default function App(){
    return(
        <div>
            <h1 style={{marginTop:"20px", marginLeft:"20px", fontSize:"20px"}}> Buttons with Different colors </h1>
            <Button> Default </Button>
            <Button bgcolor="primary"> Primary </Button>
            <Button bgcolor="secondary"> Secondary </Button>
            <Button bgcolor="tertiary"> Tertiary </Button>
            <br />
            <h1 style={{marginTop:"20px", marginLeft:"20px", fontSize:"20px"}}> Button with Rounded Corner </h1>
            <Button isRoundedCorners={true}> button </Button>
            <br />
            <h1 style={{marginTop:"20px", marginLeft:"20px", fontSize:"20px"}}> Buttons with Different Sizes </h1>
            <Button size="xs"> x-Small </Button>
            <Button size="sm"> Small </Button>
            <Button size="md"> Medium </Button>
            <Button size="lg"> Large </Button>
            <br />
            <h1 style={{marginTop:"20px", marginLeft:"20px", fontSize:"20px"}}> Button with Different Variants </h1>
            <Button variant="solid"> Solid </Button>
            <Button bgcolor="tertiary" variant="outline"> Outline </Button>
            <Button variant="ghost"> Ghost </Button>
            <Button variant="link"> Link </Button>
            <br />
            <h1 style={{marginTop:"20px", marginLeft:"20px", fontSize:"20px"}}> Button with Left and Right Icon</h1>
            <Button rightIcon ="envelope"> E-mail </Button>
            <Button leftIcon ="phone"> Call Us </Button>
            <br />
            <h1 style={{marginTop:"20px", marginLeft:"20px", fontSize:"20px"}}> Button with Loading State </h1>
            <Button isLoading={true} bgcolor="tertiary"> Button </Button>
            <Button isLoading={true} loadingText="Loading"> Click me! </Button>
        </div>
    )
}