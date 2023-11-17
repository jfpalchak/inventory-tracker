import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewCoffeeForm(props) {

  const handleFormSubmission = (event) => {
    event.preventDefault();

    // create new coffee bean item and add to list using prop method
    props.onNewCoffeeSubmission({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      quantity: 130,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleFormSubmission}>
        <input 
          type="text"
          name="name"
          placeholder="Enter name of coffee bean."
        />
        <br/>
        <input 
          type="text"
          name="origin"
          placeholder="Enter origin of coffee bean."
        />
        <br/>
        {/* Change this to dropdown selection? */}
        <input 
          type="text"
          name="roast"
          placeholder="Enter roast of coffee bean."
        />
        <br/>
        <input 
          type="text"
          name="price"
          placeholder="Enter price of coffee bean."
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeSubmission: PropTypes.func
};

export default NewCoffeeForm;