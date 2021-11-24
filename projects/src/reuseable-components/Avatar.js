import React from "react";

const avatarSizes= {
    xs:{
        width: "10%",
        height: "5%"
    },
    sm:{
        width: "13%",
        height:"10%"
    },
    md:{
        width: "18%",
        height:"14%"
    },
    lg:{
        width: "20%",
        height:"20%"
    }
}
const avatarBgColors={
    default: "#DBD0C0",
    primary: "#630000",
    secondary: "#142F43",
    tertiary: "#483434"
}

export default function Avatar(props){
    const {source, size, bgcolor} = props;

    const getAvatarStyles = () => {
        const style = {
            width: avatarSizes.xs.width,
            height: avatarSizes.xs.height,
            padding:"10px",
            border: "2px solid #D1CEBD",
            margin: "20px",
            backgroundColor: avatarBgColors.default
        }
        if(size){
            style.width = avatarSizes[size].width;
            style.height = avatarSizes[size].height;
        }
        if(bgcolor){
            style.backgroundColor = avatarBgColors[bgcolor];
        }
        return style;
    };
    return(
            <img src={source} alt="user" style={getAvatarStyles()}/>
    )
}