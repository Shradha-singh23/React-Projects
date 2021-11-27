import React from "react";

const avatarSizes= {
    xs:{
        width: "8%",
        height: "5%",
        padding: "28px",
        fontSize: "35px"
    },
    sm:{
        width: "10%",
        height: "8%",
        padding: "35px",
        fontSize: "45px"
    },
    md:{
        width: "12%",
        height: "10%",
        padding: "42px",
        fontSize: "55px"
    },
    lg:{
        width: "15%",
        height: "15%",
        padding: "50px",
        fontSize: "70px"
    }
}

const avatarVariant = {
    default : "250px",
    square: "none",
    rounded : "30px"
}

const iconInsideTitleSize = {
    xs:{
        left: "65%",
        top: "200%"
    },
    sm:{
        left: "65%",
        top: "250%"
    },
    md:{
        left: "65%",
        top: "320%"
    },
    lg:{
        left: "65%",
        top: "390%"
    }
}

const iconInsideImageSize = {
    xs:{
        left: "65%",
        bottom: "2%"
    },
    sm:{
        left: "68%",
        bottom: "20%"
    },
    md:{
        left: "68%",
        bottom: "30%"
    },
    lg:{
        left: "68%",
        bottom: "30%"
    }
}

export default function Avatar(props){
    const {source, size, variant, title, isEditable} = props;
    let url=""

    const getAvatarStyles = () => {
        const style = {
            width: avatarSizes.xs.width,
            height: avatarSizes.xs.height,
            padding: "2px",
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
            style.width = avatarSizes[size].width;
            style.height = avatarSizes[size].height;
        }
        if(title){
            style.padding = size ? avatarSizes[size].padding : avatarSizes.xs.padding;
            style.fontSize = size ? avatarSizes[size].fontSize : avatarSizes.xs.fontSize;
        }
        if(title){
            style.backgroundColor = "#D1CEBD"
        }
        if(variant){
            style.borderRadius = avatarVariant[variant];
        }
        return style;
    };
    const getEditableIconStyle = () => {
        const style = {
            borderRadius: "13px",
            width: "22px",
            height: "22px",
            padding: "4px",
            position: "absolute",
            left: source ? iconInsideImageSize.xs.left : iconInsideTitleSize.xs.left,
            top: source ? iconInsideImageSize.xs.top : iconInsideTitleSize.xs.top,
            bottom : source ? iconInsideImageSize.xs.bottom : "none",
            backgroundColor:"gray",
            color:"white"    
        }
        if(title){
            style.left = size ? iconInsideTitleSize[size].left : iconInsideTitleSize.xs.left;
            style.top = size ? iconInsideTitleSize[size].top : iconInsideTitleSize.xs.top;
        }
        if(source){
            style.left = size ? iconInsideImageSize[size].left : iconInsideImageSize.xs.left;
            style.bottom = size ? iconInsideImageSize[size].bottom : iconInsideImageSize.xs.bottom;
        }
        return style;
    }
    return(
        <>
            <div style={{
                display:"inline",
                marginLeft:"20px",
                position:"relative"
            }}>
                {isEditable && <a href={url}>
                    {source && <img src={source} alt="user" style={getAvatarStyles()} isEditable/> }     
                    {title && <p style={getAvatarStyles()} onClick={()=>console.log("eyuwyefi")}> {title}  </p>}
                    {isEditable && <i class="fal fa-pen" style={getEditableIconStyle()}></i>}
                </a>}
            </div>
        </>
    )
}