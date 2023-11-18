import React from "react";
import PropTypes from "prop-types";
import beans2 from "./../img/beans2.jpeg";

function Coffee(props) {
  
  // CSS Objects
  const outOfStockStyle = {
    color: "darkred",
    fontWeight: "bold"
  };

  const almostEmptyStyle = {
    color: "darkorange",
    fontWeight: "bold",
    fontStyle: "italic"
  };

  let priceStyle = {
    color: "rgba(252,64,64,.7)"
  };

  // Conditional Rendering
  let quantity = "In Stock";

  if (!props.quantity) {
    quantity = <span style={outOfStockStyle}>Out of Stock</span>;
    priceStyle = { color: "gray", textDecorationLine: "line-through" }
  } else if (props.quantity <= 10) {
    quantity = <span style={almostEmptyStyle}>Almost Empty</span>;
    priceStyle = { color: "darkorange" }
  }

  return (
    <React.Fragment>
      <div onClick={() => props.onCoffeeClick(props.id)} className="coffee-item">
        <div className="coffee-banner">
          <img src={beans2} alt="Coffee beans" />
          <h3>{props.name}</h3>
        </div>
        <div className="coffee-info">
          <h3>{props.origin}</h3>
          <h4>[{props.roast} Roast]</h4>
          <h3><span style={priceStyle}>${props.price}</span> / {quantity}</h3>
        </div>
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