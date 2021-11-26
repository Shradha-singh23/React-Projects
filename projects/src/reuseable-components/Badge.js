import React from "react";

const badgeSizes = {
    xs:{
        width: "25px",
        height: "25px",
        padding:"1px"
    },
    sm: {
        width:"40px",
        height: "28px",
        padding:"2px"
    },
    md: {
        width:"45px",
        height:"32px",
        padding:"3px"
    },
    lg: {
        width:"50px",
        height:"35px",
        padding:"4px"
    }
}

export default function Badge(props){
    const { badgeText, size, isSqaured, isMini } = props;
    const getBadgeStyle = () => {
        const style = {
            display:"inline-block",
            marginTop:"5px",
            marginLeft:"10px",
            backgroundColor: "rgb(30, 136, 229)",
            color:"white",
            padding: badgeSizes.sm.padding,
            borderRadius: "15px",
            fontWeight: "bold",
            border: "2px solid",
            width: badgeSizes.sm.width,
            height: badgeSizes.sm.height,
            alignContent: "center",
            textAlign:"center",
        };
        if(size){
            style.width = badgeSizes[size].width;
            style.height = badgeSizes[size].height;
            style.padding = badgeSizes[size].padding;
        }
        if(isSqaured){
            style.borderRadius= "0px"
        }
        if(isMini){
            style.borderRadius="50px";
            style.width="20px";
            style.height="20px";
        }
        return style
    }
    return(
        <div style={getBadgeStyle()}>
            {isMini ? "" : badgeText}
        </div>
    )
}