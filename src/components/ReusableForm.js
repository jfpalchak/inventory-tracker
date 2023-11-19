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
          required={true}
        />
        <label htmlFor="origin">Origin: </label>
        <input 
          type="text"
          name="origin"
          id="origin"
          placeholder="Enter origin of coffee."
          required={true}
        />
        <label htmlFor="roast">Roast: </label>
        <input 
          type="text"
          name="roast"
          id="roast"
          placeholder="Enter roast of coffee."
          required={true}
        />
        <label htmlFor="notes">Notes: </label>
        <textarea 
          type="textarea"
          name="notes"
          id="notes"
          placeholder="Enter taste notes."
        />
        <label htmlFor="price">Price: </label>
        <input 
          type="number"
          name="price"
          id="price"
          min="0"
          step="0.01"
          placeholder="$ 0.00"
          required={true}
        />
        <button type="submit" className="btn">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;