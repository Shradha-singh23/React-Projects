import React from "react";

const avatarImageSizes= {
    xs:{
        width: "10%",
        height: "5%",
        padding: "34px",
        fontSize: "40px"
    },
    sm:{
        width: "12%",
        height:"8%",
        padding: "38px",
        fontSize: "50px"
    },
    md:{
        width: "15%",
        height:"10%",
        padding: "50px",
        fontSize: "60px"
    },
    lg:{
        width: "18%",
        height:"15%",
        padding: "60px",
        fontSize: "70px"
    }
}

const avatarVariant = {
    default : "250px",
    square: "none",
    rounded : "30px"
}

export default function Avatar(props){
    const {source, size, variant, title} = props;

    const getAvatarStyles = () => {
        const style = {
            width: avatarImageSizes.xs.width,
            height: avatarImageSizes.xs.height,
            padding:"2px",
            marginLeft: "20px",
            marginRight: "20px",
            borderRadius: avatarVariant.default,
            border: "1px solid #D1CEBD",
            display: "inline-block",
            backgroundColor: "none",
            fontSize: "40px",
            color: "white"
        }
        if(size){
            style.width = avatarImageSizes[size].width;
            style.height = avatarImageSizes[size].height;
        }
        if(title){
            style.padding = size ? avatarImageSizes[size].padding : avatarImageSizes.xs.padding;
            style.fontSize = size ? avatarImageSizes[size].fontSize : avatarImageSizes.xs.fontSize;
        }
        if(title){
            style.backgroundColor = "#D1CEBD"
        }
        if(variant){
            style.borderRadius = avatarVariant[variant];
        }
        return style;
    };
    return(
        <>
            {source && <img src={source} alt="user" style={getAvatarStyles()}/> }     
            {title && <p style={getAvatarStyles()}> {title}  </p>}
        </>
    )
}