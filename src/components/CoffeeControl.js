import React from "react";
import CoffeeList from "./CoffeeList";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeDetail from "./CoffeeDetail";
import EditCoffeeForm from "./EditCoffeeForm"; 
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

  // handle click event to return to coffee list from coffee detail component
  // reset currentCoffee state to null & editing state to false
  handleDetailClick = () => {
    this.setState({
      currentCoffee: null,
      editing: false
    });
  }

  // handle clicking edit button to render EditCoffeeForm
  handleEditClick = () => {
    this.setState({
      editing: true
    });
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

  // handle updating inventory state with the updated coffee object & filter out old coffee object,
  // then reset edit state to false and currentCoffee state to null
  // @param updated coffee object to be added to inventory list
  handleUpdatingCoffee = (updatedCoffee) => {
    const updatedInventory = this.state.mainInventory
      .filter(coffee => coffee.id !== this.state.currentCoffee.id)
      .concat(updatedCoffee);
    this.setState({
      mainInventory: updatedInventory,
      currentCoffee: null,
      editing: false
    });
  }

  // handle clicking on a specific coffee to render its details
  // sets currentCoffee state to be the coffee object that was targeted
  // @param id of the coffee that was clicked on
  handleCoffeeSelection = (id) => {
    const selectedCoffee = this.state.mainInventory.filter(coffee => coffee.id === id)[0];
    this.setState({
      currentCoffee: selectedCoffee
    });
  }

  render() {

    // CSS Object
    const mainStyling = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    };

    // Conditional Rendering
    let buttonText = null;
    let visibleComponent = null;
    let buttonHandler = this.handleFormClick;

    if (this.state.editing) {
      visibleComponent = <EditCoffeeForm 
                            coffee={this.state.currentCoffee}
                            onEditCoffeeSubmission={this.handleUpdatingCoffee} />
      buttonText = "Cancel";
      buttonHandler = this.handleDetailClick;
    } else if (this.state.currentCoffee != null) {
      visibleComponent = <CoffeeDetail 
                            onClickingEdit={this.handleEditClick}
                            coffee={this.state.currentCoffee}/>
      buttonText = "Return";
      buttonHandler = this.handleDetailClick;
    } else if (this.state.formVisible) {
      visibleComponent = <NewCoffeeForm 
                            onNewCoffeeSubmission={this.handleAddNewCoffee}/>;
      buttonText = "Cancel";
    } else {
      visibleComponent = <CoffeeList 
                            onCoffeeClick={this.handleCoffeeSelection}
                            inventory={this.state.mainInventory} />;
      buttonText = "Add Coffee";
    }

    return (
      <React.Fragment>
        <main style={mainStyling}>
          {visibleComponent}

          <button onClick={buttonHandler}>{buttonText}</button>
        </main>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;