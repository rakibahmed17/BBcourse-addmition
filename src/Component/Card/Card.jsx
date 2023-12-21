import PropTypes from "prop-types";

const Card = ({card}) => {
    const {cover, course_name, details, price, credits} = card;
    return (
        <div>
            <img src={cover} alt="" />
            <h1 className="font-bold ml-3">{course_name}</h1>
            <p className="ml-3 w-[280px]">{details}</p>
            <p className="flex justify-around my-4">
                <span className="mr-5">$$:{price}</span> <span>{credits}hr</span>
            </p>
            <button className="text-1xl font-bold text-center  p-2 m-5 ">Select</button>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
};

export default Card;
