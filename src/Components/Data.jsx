import { useEffect } from "react";
import { useState } from "react";
import Cards from "./Card/Cards";
import Cart from "./Cart/Cart";

const Data = () => {
    const [courseData, setCourseData] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setCourseData(data))
    }, []);
    const [cartItems, setCartItems] = useState([]);
    const handleAddToCart = (item) => {
        const newCartItems = [...cartItems, item];
        setCartItems(newCartItems);
    }
    // console.log(courseData);
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-4 gap-6">
                <div className="col-span-3">
                    <Cards data={courseData}  cartItem={handleAddToCart}></Cards>
                </div>
                <div className="col-span-1">
                    <Cart cartItems={cartItems}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Data;