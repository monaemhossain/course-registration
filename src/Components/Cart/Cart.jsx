import PropTypes from "prop-types";
import Item from "./Item";
const Cart = ({ cartItems, creditHour, remainCreditHour, totalPrice }) => {

    return (
        <div className="p-6 bg-base-100 rounded-2xl space-y-2">
            <div>
                <h2 className="text-[#2F80ED] font-bold text-lg py-2">Credit Hour Remaining {remainCreditHour} hr</h2>
            </div>

            <hr />

            <div>
                <h2 className="font-semibold text-xl pt-2">Course Name</h2>
                <ul className="list-decimal ml-4 pt-5 pb-3 text-[#1C1B1B99] space-y-3">
                    {
                        cartItems.map(item => <Item key={item.id} item={item}></Item>)
                    }
                </ul>
            </div>

                <hr />

            <div>
                <h2 className="font-medium text-[#1C1B1BCC] py-2">Total Credit Hour : {creditHour}</h2>
            </div>

            <hr />

            <div>
                <h2 className="font-semibold text-[#1C1B1BCC] pt-2">Total Price : {totalPrice} BDT</h2>
            </div>
        </div>
    );
};
Cart.propTypes = {
    cartItems: PropTypes.array,
    creditHour: PropTypes.number,
    remainCreditHour: PropTypes.number,
    totalPrice: PropTypes.number,

}
export default Cart;