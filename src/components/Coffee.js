import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  
  // CSS Objects
  const outOfStockStyle = {
    color: "red",
    fontWeight: "bold"
  };

  const almostEmptyStyle = {
    color: "darkorange",
    fontWeight: "bold",
    fontStyle: "italic"
  };

  // Conditional Rendering
  let quantity = "In Stock";

  if (!props.quantity) {
    quantity = <span style={outOfStockStyle}>Out of Stock</span>;
  } else if (props.quantity <= 10) {
    quantity = <span style={almostEmptyStyle}>Almost Empty</span>;
  }

  return (
    <React.Fragment>
      <div onClick={() => props.onCoffeeClick(props.id)} className="coffee-item">
        <h3>{props.name}</h3>
        <h4>{props.origin}</h4>
        <h5>{props.roast}</h5>
        <h5>${props.price}</h5>
        <h5>{quantity}</h5>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
  onCoffeeClick: PropTypes.func
};

export default Coffee;