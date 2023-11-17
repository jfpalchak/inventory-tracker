import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  
  let quantity = props.quantity;

  if (!quantity) {
    quantity = "Out of Stock";
  }

  return (
    <React.Fragment>
      <div onClick={() => props.onCoffeeClick(props.id)} className="coffee-item">
        <h3>{props.name}</h3>
        <h4>{props.origin}</h4>
        <h5>{props.roast}</h5>
        <h5>{props.price}</h5>
        <h5>{quantity}</h5>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  onCoffeeClick: PropTypes.func
};

export default Coffee;