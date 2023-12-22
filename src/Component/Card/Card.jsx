import PropTypes from "prop-types";
import {MdCreditScore} from "react-icons/md";

const Card = ({card, handleToCourseName}) => {
    const {cover, course_name, details, price, credits} = card;
    return (
        <div className="bg-slate-100 rounded-lg  w-full p-3">
            <img src={cover} alt="" />
            <h1 className="font-bold ml-3">{course_name}</h1>
            <p className="ml-3 w-[200px]">{details}</p>
            <p className="flex justify-around my-4">
                <span className="  font-bold  ">$$:{price}</span>
                <span className="ml-5 p-0">
                    <MdCreditScore />
                </span>
                <span className=" font-bold "> Credits: {credits}hr</span>
            </p>

            <div className="mr-10">
                <button
                    onClick={() => handleToCourseName(card)}
                    className="text-1xl font-bold text-center p-2 m-5 bg-blue-700 w-full rounded-xl text-white"
                >
                    Select
                </button>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
    handleToCourseName: PropTypes.func,
};

export default Card;
