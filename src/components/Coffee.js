import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  
  return (
    <React.Fragment>
      <div className="coffee-item">
        <h3>{props.name}</h3>
        <h4>{props.origin}</h4>
        <h5>{props.roast}</h5>
        <h5>{props.price}</h5>
        <h5>{props.quantity}</h5>
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
  id: PropTypes.string
};

export default Coffee;