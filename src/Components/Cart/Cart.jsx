import PropTypes from "prop-types";
import Item from "./Item";
const Cart = ({ cartItems }) => {
    return (
        <div className="p-6 bg-base-100 rounded-2xl space-y-2">
            <div>
                <h2 className="text-[#2F80ED] font-bold text-lg">Credit Hour Remaining 7 hr</h2>
            </div>

            <div className="divider m-0"></div>

            <div>
                <h2 className="font-semibold text-xl">Course Name</h2>
                <ul className="list-decimal ml-4 py-6">
                    {
                        cartItems.map(item => <Item key={item.id} item={item}></Item>)
                    }
                </ul>
            </div>

            <div className="divider m-0"></div>

            <div>
                <h2 className="font-medium">Total Credit Hour : 13</h2>
            </div>

            <div className="divider m-0"></div>

            <div>
                <h2 className="font-semibold">Total Price : 48000 BDT</h2>
            </div>
        </div>
    );
};
Cart.propTypes = {
    cartItems: PropTypes.array,
}
export default Cart;