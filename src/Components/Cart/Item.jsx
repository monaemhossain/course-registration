import PropTypes from 'prop-types';

const Item = ({item }) => {
    const {title} = item;
    // console.log(duration);
    return (
        <li>{title}</li>  
    );
};

Item.propTypes = {
    item: PropTypes.object,
}
export default Item;