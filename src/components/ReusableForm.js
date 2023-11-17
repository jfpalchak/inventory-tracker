import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label htmlFor="name">Name: </label>
        <input 
          type="text"
          name="name"
          id="name"
          placeholder="Enter name of coffee."
        />
        <label htmlFor="origin">Origin: </label>
        <input 
          type="text"
          name="origin"
          id="origin"
          placeholder="Enter origin of coffee."
        />
        {/* Change this to dropdown selection? */}
        <label htmlFor="roast">Roast: </label>
        <input 
          type="text"
          name="roast"
          id="roast"
          placeholder="Enter roast of coffee."
        />
        <label htmlFor="price">Price: </label>
        <input 
          type="text"
          name="price"
          id="price"
          placeholder="$ 0.00"
        />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;