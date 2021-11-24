import React from "react";
// import Input from "./Input";
// import Button from "./Button";
import Avatar from "./Avatar";

export default function App(){
    return(
        <>
            <Avatar source = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7KguIaOT7dM5oP5ZW9G4dEdCEWRhI8kfaA&usqp=CAU" />
            <Avatar 
                source = "https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-student-icon-png-image_3728104.jpg"
                size = "sm"
            />
            <Avatar 
                source = "https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg"
                size = "md"
                bgcolor = "tertiary"
            />
            <Avatar 
                source = "https://png.pngitem.com/pimgs/s/22-223925_female-avatar-female-avatar-no-face-hd-png.png"
                size = "lg"
                bgcolor = "secondary"
            />
            <Avatar source = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7KguIaOT7dM5oP5ZW9G4dEdCEWRhI8kfaA&usqp=CAU" 
                size = "sm"
                bgcolor = "primary"
            />
        </>
    )
}