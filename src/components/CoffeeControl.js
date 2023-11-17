import React from "react";
import CoffeeControl from "./CoffeeControl";

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainInventory: [],
      formVisible: false,
      editing: false,
      currentCoffee: null
    };
  }

  render() {

    return (
      <React.Fragment>
        <CoffeeList />
      </React.Fragment>
    );
  }
}

export default CoffeeControl;