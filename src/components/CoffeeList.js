import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props) {

  return(
    <React.Fragment>

      {props.inventory.map((bean) => 
          <Coffee 
            name={bean.name}
            origin={bean.origin}
            roast={bean.roast}
            price={bean.price}
            quantity={bean.quantity}
            key={bean.id}
            id={bean.id}
          />
      )}

    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  inventory: PropTypes.array
};

export default CoffeeList;