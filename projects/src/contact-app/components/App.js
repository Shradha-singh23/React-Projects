import React, { useEffect, useState } from "react";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";

export default function App() {
    const LOCAL_STORAGE_KEY ="contacts";
    const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
        console.log(contact);
        setContacts((prevContact) => ([
            ...prevContact, contact
        ]))
    }
    useEffect(() => {
        const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retrievedContacts) setContacts(retrievedContacts);
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts])

    return(
        <div className="ui container">
            <Header />
            <AddContact addContactHandler={addContactHandler} />
            <ContactList contacts={contacts}/>
        </div>
    );
}