import React from "react";
import PropTypes from "prop-types";


function CoffeeDetail(props) {

  const { coffee } = props;

  return (
    <React.Fragment>
      <section className="selected-coffee">

        <div className="coffee-detail">
          <h3>{coffee.name}</h3>
          <h4>{coffee.origin}</h4>
          <h4>{coffee.roast}</h4>
          <h4>{coffee.price}</h4>
          <h4>{coffee.quantity}</h4>
        </div>

        <button>Buy</button>

        <button>Edit</button>
        <button>Remove</button>

      </section>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object
};

export default CoffeeDetail;