import PropTypes from "prop-types";
import Item from "./Item";
const Cart = ({ cartItems, creditHour, remainCreditHour }) => {
    // console.log(remainCreditHour);
    return (
        <div className="p-6 bg-base-100 rounded-2xl space-y-2">
            <div>
                <h2 className="text-[#2F80ED] font-bold text-lg">Credit Hour Remaining {remainCreditHour} hr</h2>
            </div>

            <div className="divider m-0"></div>

            <div>
                <h2 className="font-semibold text-xl">Course Name</h2>
                <ul className="list-decimal ml-4 pt-6 pb-4 text-[#715b5b99] space-y-3">
                    {
                        cartItems.map(item => <Item key={item.id} item={item}></Item>)
                    }
                </ul>
            </div>

            <div className="divider m-0"></div>

            <div>
                <h2 className="font-medium text-[#1C1B1BCC]">Total Credit Hour : {creditHour}</h2>
            </div>

            <div className="divider m-0"></div>

            <div>
                <h2 className="font-semibold text-[#1C1B1BCC]">Total Price : 48000 BDT</h2>
            </div>
        </div>
    );
};
Cart.propTypes = {
    cartItems: PropTypes.array,
    creditHour: PropTypes.number,
    remainCreditHour: PropTypes.number,

}
export default Cart;