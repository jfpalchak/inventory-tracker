import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props) {

  const listStyling = {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  };

  return(
    <React.Fragment>
      <section className="coffee-list" style={listStyling}>
        {props.inventory.map((bean) => 
            <Coffee
              onCoffeeClick={props.onCoffeeClick}
              name={bean.name}
              origin={bean.origin}
              roast={bean.roast}
              price={bean.price}
              quantity={bean.quantity}
              key={bean.id}
              id={bean.id}
            />
        )}
      </section>
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  inventory: PropTypes.array,
  onCoffeeClick: PropTypes.func
};

export default CoffeeList;