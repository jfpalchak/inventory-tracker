import React from "react";
import PropTypes from "prop-types";


function CoffeeDetail(props) {

  const { coffee, onClickingEdit, onClickingSell } = props;

  let sellButtonVisible = <button onClick={onClickingSell}>Sell</button>;
  let quantity = coffee.quantity;

  if (!coffee.quantity) {
    sellButtonVisible = null;
    quantity = "Out of Stock";
  }

  return (
    <React.Fragment>
      <section className="selected-coffee">

        <div className="coffee-detail">
          <h3>{coffee.name}</h3>
          <h4>{coffee.origin}</h4>
          <h4>{coffee.roast}</h4>
          <h4>{coffee.price}</h4>
          <h4>{quantity}</h4>
        </div>

        {sellButtonVisible}

        <button onClick={onClickingEdit}>Edit</button>
        <button>Remove</button>

      </section>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
};

export default CoffeeDetail;