import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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