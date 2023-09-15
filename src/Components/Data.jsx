import { useEffect } from "react";
import { useState } from "react";
import Cards from "./Cards";

const Data = () => {
    const [courseData, setCourseData] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setCourseData(data))
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-5">
                <div className="col-span-4">
                    <Cards data={courseData}></Cards>
                </div>
                <div className="col-span-1"></div>
            </div>
        </div>
    );
};

export default Data;