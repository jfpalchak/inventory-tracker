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

  // handle submission of new coffee form and add new coffee to inventory list,
  // then reset formVisible state to false and return to coffee list
  // @param new coffee object to be added to inventory list
  handleAddNewCoffee = (newCoffee) => {
    const updatedInventory = this.state.mainInventory.concat(newCoffee);
    this.setState({
      mainInventory: updatedInventory,
      formVisible: false
    });
  }

  render() {

    const mainStyling = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    };

    let buttonText = null;
    let visibleComponent = null;

    if (this.state.formVisible) {
      visibleComponent = <NewCoffeeForm 
                            onNewCoffeeSubmission={this.handleAddNewCoffee}/>;
      buttonText = "Cancel";
    } else {
      visibleComponent = <CoffeeList 
                            inventory={this.state.mainInventory} />;
      buttonText = "Add Coffee";
    }

    return (
      <React.Fragment>
        <main style={mainStyling}>
          {visibleComponent}

          <button onClick={this.handleFormClick}>{buttonText}</button>
        </main>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;