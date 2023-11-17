import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label>Name: </label>
        <input 
          type="text"
          name="name"
          placeholder="Enter name of coffee."
        />
        <label>Origin: </label>
        <input 
          type="text"
          name="origin"
          placeholder="Enter origin of coffee."
        />
        {/* Change this to dropdown selection? */}
        <label>Roast: </label>
        <input 
          type="text"
          name="roast"
          placeholder="Enter roast of coffee."
        />
        <label>Price: </label>
        <input 
          type="text"
          name="price"
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