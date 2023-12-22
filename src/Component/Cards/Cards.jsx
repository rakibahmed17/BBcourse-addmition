import {useEffect, useState} from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const Cards = ({handleToCourseName}) => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch("Cards.json")
        .then((res) => res.json())
        .then((data) => setCards(data));
    }, []);

    return (
        <div className="max-w-6xl mx-auto py-10">
            <div className="grid grid-cols-3 align-baseline gap-5 mr-8">
                {cards.map((card, idx) => (
                    <Card key={idx} handleToCourseName={handleToCourseName} card={card}></Card>
                ))}
            </div>
            <div className=" bg-green-700 ">
                <h1 ></h1>
            </div>
        </div>
    );
};
Cards.propTypes = {
    handleToCourseName: PropTypes.func,
};
export default Cards;
