import PropTypes from 'prop-types';
const liStyle = {
    content: `counter(item) ' '`
}
const Item = ({item}) => {
    const {title} = item;
    return (
        <li style={liStyle}>{title}</li>  
    );
};

Item.propTypes = {
    item: PropTypes.object,
}
export default Item;