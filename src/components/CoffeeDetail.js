import React from "react";
import PropTypes from "prop-types";


function CoffeeDetail(props) {

  const { coffee, onClickingEdit, onClickingSell, onClickingDelete } = props;

  const handleSellingCoffee = () => {
    const updatedCoffee = {
      ...coffee,
      quantity: (coffee.quantity === 0) ? 0 : coffee.quantity - 1 // if quantity is 0, keep it at 0, otherwise decrement by 1
    };
    onClickingSell(updatedCoffee);
  };

  let quantity = `Quantity: ${coffee.quantity} lbs`;
  let isOutOfStock = false;

  if (!coffee.quantity) {
    isOutOfStock = true;
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

        <div className="sell-button">
          <button className="btn btn-sell" onClick={handleSellingCoffee} disabled={isOutOfStock}>Sell</button>
        </div>

        <div className="crud-buttons">
          <button className="btn btn-edit" onClick={onClickingEdit}>Edit</button>
          <button className="btn btn-danger" onClick={onClickingDelete}>Remove</button>
        </div>
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