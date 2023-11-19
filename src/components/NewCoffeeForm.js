import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from "uuid";

function NewCoffeeForm(props) {

  const handleFormSubmission = (event) => {
    event.preventDefault();

    // create new coffee bean item and add to list using prop method
    props.onNewCoffeeSubmission({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      notes: event.target.notes.value,
      price: parseFloat(event.target.price.value),
      quantity: 130,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <section className="form-component">
        <h4>Add New Coffee</h4>
        <ReusableForm 
          formSubmissionHandler={handleFormSubmission}
          buttonText="Submit"
        />
      </section>
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeSubmission: PropTypes.func
};

export default NewCoffeeForm;