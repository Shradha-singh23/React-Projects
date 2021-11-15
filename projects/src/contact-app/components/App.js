import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";

export default function App() {
    const LOCAL_STORAGE_KEY ="contacts";
    const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
        setContacts((prevContact) => ([
            ...prevContact, { id: uuid(), ...contact}
        ]))
    }

    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });
        setContacts(newContactList);
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
            <Router>
                <Header />
                <Routes> 
                    <Route path ="/add" element ={<AddContact addContactHandler={addContactHandler}/>}/>
                    <Route path ="/" exact element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>} />
                </Routes>
            </Router>
        </div>
    );
}