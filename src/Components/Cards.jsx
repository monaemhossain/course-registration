import PropTypes from 'prop-types';
import Card from "./Card";

const Cards = ({data}) => {
    console.log(data);
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                data.map(data => <Card key={data.id} data={data} ></Card>)
            }
        </div>
    );
};
Cards.propTypes = {
    data: PropTypes.any,
}

export default Cards;