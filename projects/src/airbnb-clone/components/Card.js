import React from "react";
import star from "../images/Star.png";

export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            <img src={require(`../images/${props.img}.png`).default} alt="katie" className="card--image"/>
            <div className="card--stats">
                <img src={star} alt="star" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}