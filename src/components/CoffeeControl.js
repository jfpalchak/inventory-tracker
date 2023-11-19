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
  // if editing is true, only reset editing state to false,
  // otherwise reset currentCoffee state to null & return to coffee list
  handleDetailClick = () => {
    this.setState({
      currentCoffee: this.state.editing ? this.state.currentCoffee : null, // return to detail if editing, otherwise return to list
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
  handleAddingNewCoffee = (newCoffee) => {
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
      currentCoffee: updatedCoffee,
      editing: false
    });
  }

  // handle updating inventory state by filtering out the selected coffee object to be deleted,
  // then reset currentCoffee state to null
  handleDeletingCoffee = () => {
    const updatedInventory = this.state.mainInventory
      .filter(coffee => coffee.id !== this.state.currentCoffee.id);
    this.setState({
      mainInventory: updatedInventory,
      currentCoffee: null
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
                            onClickingSell={this.handleUpdatingCoffee}
                            onClickingEdit={this.handleEditClick}
                            onClickingDelete={this.handleDeletingCoffee}
                            coffee={this.state.currentCoffee}/>
      buttonText = "Return";
      buttonHandler = this.handleDetailClick;
    } else if (this.state.formVisible) {
      visibleComponent = <NewCoffeeForm 
                            onNewCoffeeSubmission={this.handleAddingNewCoffee}/>;
      buttonText = "Cancel";
    } else {
      visibleComponent = <CoffeeList 
                            onCoffeeClick={this.handleCoffeeSelection}
                            inventory={this.state.mainInventory} />;
      buttonText = "Add Coffee";
    }

    return (
      <React.Fragment>
        <main>
            {visibleComponent}
            <button onClick={buttonHandler} className="main-btn btn">{buttonText}</button>
        </main>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;