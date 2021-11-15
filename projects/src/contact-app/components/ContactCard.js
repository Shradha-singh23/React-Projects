import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

export default function ContactCard(props){
    const { id, name, email } = props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content" key={id}>
                <Link to={{ pathname:`/contact/${id}`, state:{contact: props.contact}}}>
                    <div className="header"> {name} </div>
                    <div> {email}</div>
                </Link>
            </div>
            <i 
                className="trash alternate outline icon" 
                style={{ color: "red", marginTop: "7px", marginLeft:"15px" }}
                onClick={() => props.clickHandler(id)}
            ></i>
        </div>
    )
}