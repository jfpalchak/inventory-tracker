import React from "react";
import PropTypes from "prop-types";


function CoffeeDetail(props) {

  const { coffee, onClickingEdit, onClickingSell, onClickingDelete} = props;

  let sellButtonVisible = <button onClick={onClickingSell}>Sell</button>;
  let quantity = "Quantity: " + coffee.quantity + " lbs";

  if (!coffee.quantity) {
    sellButtonVisible = null;
    quantity = "Out of Stock";
  }

  return (
    <React.Fragment>
      <section className="selected-coffee">

        <div className="coffee-detail">
          <h3>Name: {coffee.name}</h3>
          <h4>Origin: {coffee.origin}</h4>
          <h4>Roast: {coffee.roast}</h4>
          <h4>Price: ${coffee.price} / lb</h4>
          <h4>{quantity}</h4>
        </div>

        {sellButtonVisible}

        <button onClick={onClickingEdit}>Edit</button>
        <button onClick={onClickingDelete}>Remove</button>

      </section>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default CoffeeDetail;