import PropTypes from "prop-types";
const Course = ({course}) => {
    const {course_name} = course;
    return (
        <div className=" p-5">
            <h1 className="text-2xl  bg-slate-100 p-5 rounded-lg font-bold">Course name:{course_name}</h1>
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object,
};

export default Course;
