import PropTypes from 'prop-types';
import Card from "./Card";

const Cards = ({data, cartItem}) => {
    // console.log(data);
    return (
        <div className='grid grid-cols-3 gap-6 pb-20'>
            {
                data.map(data => <Card key={data.id} data={data} cartItem={cartItem}></Card>)
            }
        </div>
    );
};
Cards.propTypes = {
    data: PropTypes.array,
    cartItem: PropTypes.func,
}

export default Cards;