import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

export default function ContactDetail(props){
    const { name, email } = props.location.state.contact;
    return(
        <div style={{marginTop: "50px"}}>
            <div className="ui card container">
                <div className="image">
                    <img src={user} alt={user} />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue" style={{marginLeft:"280px"}}> Back to Contact List </button>
                </Link>
            </div>
        </div>
    );
};