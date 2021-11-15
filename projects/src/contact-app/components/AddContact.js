import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function AddContact(props){
    let history = useHistory();

    const [user, setUser] = useState({
        name: "",
        email: ""
    })

    const onNameChange = (e) => {
        setUser((prevUser) => ({
            ...prevUser,
            name: e.target.value
        }))
    }

    const onEmailChange = (e) => {
        setUser((prevUser) => ({
            ...prevUser,
            email: e.target.value
        }))
    }
    const add = (e) => {
        e.preventDefault();
        if (user.name === "" || user.email === ""){
            alert("All the fields are MANDATORY!")
            return;
        }
        props.addContactHandler(user);
        setUser({name:"", email:""});
        history.push('/');
    }
    return(
        <div className="ui main">
            <h2> Add Contact </h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label> Name </label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={user.name}
                        onChange={onNameChange} 
                    />
                </div>
                <div className="field">
                    <label> Email </label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        value={user.email}
                        onChange={onEmailChange} 
                    />
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    )
}