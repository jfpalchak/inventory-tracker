import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm(props) {

  const { coffee } = props;

  const handleFormSubmission = (event) => {
    event.preventDefault();

    props.onEditCoffeeSubmission({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      quantity: coffee.quantity, // cannot be edited
      id: coffee.id // cannot be edited
    });
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleFormSubmission}
        buttonText="Update"
      />
    </React.Fragment>
  );
}

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffeeSubmission: PropTypes.func
};

export default EditCoffeeForm;