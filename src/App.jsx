import Cards from "./Component/Cards/Cards";
import Courses from "./Component/Courses/Courses";
import Header from "./Component/Header/Header";

function App() {
    return (
        <>
            <div>
                <Header></Header>
                <div className="max-w-6xl mx-auto">
                    <Cards></Cards>
                    <Courses></Courses>
                </div>
            </div>
        </>
    );
}

export default App;
