import { useState, useEffect } from "react";

import Cards from "./Card/Cards";
import Cart from "./Cart/Cart";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Data = () => {
    const [courseData, setCourseData] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setCourseData(data))
    }, []);


    const [cartItems, setCartItems] = useState([]);
    const [creditHour, setCreditHour] = useState(0);
    const [remainCredit, setRemainCredit] = useState(20)

    const handleAddToCart = (course) => {
        
        const addedItem = cartItems.find(item => item.id == course.id);
        let creditHour = course.duration;

        if (addedItem) {
            return toast.warn('Already added to the cart');
        } else {

            cartItems.forEach(duration => {
                creditHour += duration.duration;
            });

            if (creditHour > 20) {
                return toast.error('Credit limit exited');
            } else {
                setCreditHour(creditHour);
                const remainCreditHour = 20 - creditHour;
                setRemainCredit(remainCreditHour);
            }

            const newCartItems = [...cartItems, course];
            setCartItems(newCartItems);
        }

    }

    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-4 gap-6">
                <div className="col-span-3">
                    <Cards data={courseData} cartItem={handleAddToCart}></Cards>
                </div>
                <div className="col-span-1">
                    <Cart cartItems={cartItems} creditHour={creditHour} remainCreditHour={remainCredit}></Cart>
                </div>
            </div>
            <ToastContainer position="bottom-right" autoClose={3000} newestOnTop/>
        </div>
    );
};

export default Data;