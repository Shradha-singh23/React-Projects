import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

export default function ContactList(props){
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact)=>{
        return(
            <ContactCard 
                contact={contact} 
                clickHandler={deleteContactHandler} 
                key={contact.id}
            />
        )
    })
    return(
        <div className="main" style={{marginTop:"50px"}}>
            <h2> Contact
                <Link to="/add">
                    <button className="ui button blue" style={{marginLeft:"50px"}}> Add Contact </button>
                </Link>
            </h2>
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    )
}