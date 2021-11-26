import React from "react";
// import Input from "./Input";
import SearchBar from "./SearchBar";
// import Button from "./Button";
// import Avatar from "./Avatar";
// import Badge from "./Badge";

export default function App(){
    return(
        <div>
            {/* <h1 style={{marginTop:"10px", marginLeft:"10px", fontSize:"20px"}}> Variants </h1>
            <h2 style={{fontSize:"15px", marginLeft:"10px",}}> outline </h2>
            <SearchBar/>
            <h2 style={{fontSize:"15px", marginLeft:"10px",}}> filled </h2>
            <SearchBar variant="filled"/>
            <h2 style={{fontSize:"15px", marginLeft:"10px",}}> flushed </h2>
            <SearchBar variant="flushed"/>
            <h2 style={{fontSize:"15px", marginLeft:"10px",}}> unstyled </h2>
            <SearchBar variant="unstyled"/> */}
            {/* <h1 style={{marginTop:"10px", marginLeft:"10px", fontSize:"20px"}}> Label </h1>
            <SearchBar 
                label = "Username"
                placeholderText = "Enter username"
            />
            <h1 style={{marginTop:"10px", marginLeft:"10px", fontSize:"20px"}}> Error </h1>
            <SearchBar 
                error={true}
                errorCaption = "Please Try Again"
            />
            <h1 style={{marginTop:"10px", marginLeft:"10px", fontSize:"20px"}}> Disabled </h1>
            <SearchBar 
                disabled={true}
            />
            <SearchBar
                loading={true}
                placeholderText="Searching for something..."
            /> */}
            <h1 style={{marginTop:"10px", marginLeft:"10px", fontSize:"20px"}}> Sizes </h1>
            <SearchBar sizes="xs" />
            <SearchBar/>
            <SearchBar sizes="md" />
            <SearchBar sizes="lg" />
        </div>
    )
}