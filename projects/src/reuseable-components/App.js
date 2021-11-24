import React from "react";
// import Input from "./Input";
// import Button from "./Button";
import Avatar from "./Avatar";

export default function App(){
    return(
        <>
            <h1 style={{fontSize:"20px",paddingTop:"20px", marginLeft:"20px"}}> Avatar Sizes</h1>
            <Avatar 
                title="AB"
            />
            <Avatar 
                title="AB"
                size="sm"
            />
            <Avatar 
                title="AB"
                size="md"
            />
            <Avatar 
                title="AB"
                size="lg"
            />
            <br />
            <h1 style={{fontSize:"20px", marginLeft:"20px"}}> Avatar Variants </h1>
            <Avatar 
                title="AB"
            />
            <Avatar 
                title="AB"
                variant="square"
            />
            <Avatar 
                title="AB"
                variant="rounded"
            />
            <br/>
            <h1 style={{fontSize:"20px", marginLeft:"20px"}}> Avatar with Source and Variants</h1>
            <Avatar source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7KguIaOT7dM5oP5ZW9G4dEdCEWRhI8kfaA&usqp=CAU" />
            <Avatar 
                source="https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-student-icon-png-image_3728104.jpg"
                size="sm"
                variant="squared"
            />
            <Avatar 
                source="https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg"
                size="md"
                variant="rounded"
            />
        </>
    )
}