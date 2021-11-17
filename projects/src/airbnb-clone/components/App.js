import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import Hero from "./Hero";
import Card from "./Card";
import experience from "../data";

export default function App(){
    const cards = experience.map(item => {
        return(
            <Card 
                key={item.id}
                {...item}
            />
        )
    });
    return(
        <div>
            <Navbar />
            <Hero />
            <section className="cards--list">   
                {cards}
            </section>
        </div>
    )
}