import {useEffect, useState} from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch("Cards.json")
        .then((res) => res.json())
        .then((data) => setCards(data));
    }, []);

    return (
        <div className=" flex max-w-7xl mx-auto py-10">
            <div className=" grid grid-cols-3 gap-5 mr-8">
                {cards.map((card) => (
                    <Card key={card.idx} card={card}></Card>
                ))}
            </div>
            <div className="w-1/4 p-6 bg-slate-700 ">
                <h1 className="text-3xl font-bold">course name</h1>
            </div>
        </div>
    );
};

export default Cards;
