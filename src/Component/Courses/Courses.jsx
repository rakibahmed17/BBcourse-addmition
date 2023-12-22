import Course from "../Course/Course";

const Courses = ({courses}) => {
    return (
        <div className="w-[50%]  bg-slate-200 ">
            <h1 className="text-3xl font-bold m-4 p-5">Courses name:{courses.length}</h1>
            {courses.map((course, idx) => (
                <Course course={course} key={idx}></Course>
            ))}
        </div>
    );
};

export default Courses;
