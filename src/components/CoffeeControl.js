import React from "react";
import CoffeeControl from "./CoffeeControl";
import { testData } from "./test-list";

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainInventory: testData,
      formVisible: false,
      editing: false,
      currentCoffee: null
    };
  }

  render() {

    return (
      <React.Fragment>
        <CoffeeList 
          inventory={this.state.mainInventory}
        />
      </React.Fragment>
    );
  }
}

export default CoffeeControl;