import {  TbCurrencyTaka } from 'react-icons/tb';
import PropTypes from 'prop-types';

const Card = ({data}) => {
    const {title, description, price, duration, thumbnail} = data;
    console.log(data);
    return (
        <div>
            <div className="card bg-base-100 p-4">
                <figure className='pb-4 rounded-none'><img src={thumbnail} alt={title + " Thumbnail"} className='w-full rounded-lg'/></figure>
                <div className="card-body p-0  text-[#1C1B1B99]">
                    <h2 className="card-title text-lg text-black">{title}</h2>
                    <p>{description}</p>
                    <div className="flex items-center justify-between font-medium">
                        <p className='flex items-center'><span>Price: {price}</span> <span className='text-xl'><TbCurrencyTaka /></span> </p>
                        <p className='text-end'>{duration}hr</p>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary w-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    data: PropTypes.any,

}
export default Card;