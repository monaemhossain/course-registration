import PropTypes from "prop-types";
import Item from "./Item";
const Cart = ({ cartItems }) => {
    return (
        <div className="p-6 bg-base-100 rounded-2xl">
            <div>
                <h2 className="text-[#2F80ED] font-bold text-lg">Credit Hour Remaining 7 hr</h2>
            </div>

            <div className="divider"></div>

            <div>
                <ul className="list-decimal ml-4">
                    {
                        cartItems.map(item => <Item key={item.id} item={item}></Item>)
                    }
                </ul>
            </div>
        </div>
    );
};
Cart.propTypes = {
    cartItems: PropTypes.array,
}
export default Cart;