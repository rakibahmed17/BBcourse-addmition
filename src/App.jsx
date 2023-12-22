import {useState} from "react";
import Cards from "./Component/Cards/Cards";
import Courses from "./Component/Courses/Courses";
import Header from "./Component/Header/Header";

function App() {
    const [courses, setCourses] = useState([]);

    const handleToCourseName = (card) => {
        const newCourses = [...courses, card];
        setCourses(newCourses);
    };
    return (
        <>
            <div>
                <Header></Header>
                <div className="md:flex max-w-6xl mx-auto">
                    <Cards handleToCourseName={handleToCourseName}></Cards>
                    <Courses courses={courses}></Courses>
                </div>
            </div>
        </>
    );
}

export default App;
