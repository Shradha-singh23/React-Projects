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
                img={item.coverImg}
                rating={item.stats.rating}
                review={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    });
    return(
        <div>
            <Navbar />
            <Hero />
            {cards}
        </div>
    )
}