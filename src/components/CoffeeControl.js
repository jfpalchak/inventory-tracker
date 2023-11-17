import React from "react";
import CoffeeList from "./CoffeeList";
import NewCoffeeForm from "./NewCoffeeForm";
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

  // handle click event to toggle whether NewCoffeeForm renders or not
  handleFormClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  render() {
    let buttonText = null;
    let visibleComponent = null;

    if (this.state.formVisible) {
      visibleComponent = <NewCoffeeForm />;
      buttonText = "Cancel";
    } else {
      visibleComponent = <CoffeeList 
                            inventory={this.state.mainInventory}
                          />
      buttonText = "Add Coffee";
    }

    return (
      <React.Fragment>
        {visibleComponent}

        <button onClick={this.handleFormClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;