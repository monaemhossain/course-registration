import { TbCurrencyTaka } from 'react-icons/tb';
import { BsBook } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Card = ({ data, cartItem }) => {
    const { title, description, price, duration, thumbnail } = data;
    // console.log(data);
    return (
        <div>
            <div className="card bg-base-100 p-4">
                <figure className='pb-4 rounded-none'><img src={thumbnail} alt={title + " Thumbnail"} className='w-full rounded-lg' /></figure>
                <div className="card-body p-0  text-[#1C1B1B99]">
                    <h2 className="card-title text-lg text-black">{title}</h2>
                    <p>{description}</p>
                    <div className="flex items-center justify-between font-medium">
                        <p className='flex items-center'>
                            <span>Price: {price}</span>
                            <span className='text-xl'><TbCurrencyTaka /></span>
                        </p>
                        <p className='flex items-center justify-end gap-2'>
                            <span><BsBook></BsBook></span>
                            <span>Credit : {duration}hr</span>
                        </p>
                    </div>
                    <div className="card-actions justify-center">
                        <button onClick={() => cartItem(data)} className="btn bg-blue-600 w-full text-white font-semibold hover:bg-black transition-all">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    data: PropTypes.any,
    cartItem: PropTypes.func,
}
export default Card;