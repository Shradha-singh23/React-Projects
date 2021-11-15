import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../api/contact";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";
import ContactDetail from "./ContactDetail";

export default function App() {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const retrievedContacts = async () =>{
        const response = await api.get("/contacts");
        return response.data;
    };

    const addContactHandler = async (contact) => {
        const request = {
            id: uuid(),
            ...contact
        }

        const response = await api.post("/contacts", request);

        setContacts([...contacts, response.data]);
    };

    const removeContactHandler = async (id) => {
        await api.delete(`/contacts/${id}`);
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });
        setContacts(newContactList);
    };

    const searchHandler = (searchTerm) =>{
        setSearchTerm(searchTerm);
        if(searchTerm !== ""){
            const newContactList = contacts.filter((contact) => {
                return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
            })
            setSearchResults(newContactList);
        } else {
            setSearchResults(contacts);
        }
    };

    useEffect(() => {
        const getAllContacts = async () =>{
            const allContacts = await retrievedContacts();
            if(allContacts) setContacts(allContacts);
        }
        getAllContacts();
    }, [])

    return(
        <div className="ui container">
            <Router>
                <Header />
                <Switch> 
                    <Route 
                        path ="/add" 
                        render={(props) => (
                            <AddContact 
                                {...props} 
                                addContactHandler={addContactHandler} 
                            />
                        )}
                    />
                    <Route 
                        path ="/" 
                        exact 
                        render={(props) => (
                            <ContactList 
                                {...props} 
                                contacts={searchTerm.length < 1 ? contacts : searchResults} 
                                getContactId={removeContactHandler}
                                term={searchTerm}
                                searchKeyword={searchHandler}
                            />
                        )}
                    />
                    <Route 
                        path ="/contact/:id" 
                        component={ContactDetail} 
                    />
                </Switch>
            </Router>
        </div>
    );
}