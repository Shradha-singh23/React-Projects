import React from "react";
import Button from "./Button"

export default function App(){
    return(
        <div>
            <Button 
                bgcolor="primary" 
                isRoundedCorners={true} 
                size="xs"
            > 
                Click Me! 
            </Button>
            <Button 
                bgcolor="secondary" 
                isRoundedCorners={false} 
                size="sm"
            > 
                Click Me! 
            </Button>
            <Button 
                bgcolor="tertiary" 
                isRoundedCorners={true} 
                size="md"
            > 
                Click Me! 
            </Button>
            <Button 
                size="lg"
            > 
                Click Me! 
            </Button>
        </div>
    )
}