import React from "react";

function NewCoffeeForm(props) {

  const handleFormSubmission = (event) => {
    event.preventDefault();

    // create new coffee bean item and add to list using prop method
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
          type="number"
          name="price"
          placeholder="Enter price of coffee bean."
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

export default NewCoffeeForm;