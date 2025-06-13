import React from "react";

const HomePage = ({ nextStage }) => {
  return (
    <div className="form-container">
      <h1>Current Customer Loan Application</h1>
      <p>
        You have selected a form for current customers. If this is incorrect,
        please go back.
      </p>
      <button onClick={nextStage}>Next</button>
    </div>
  );
};

export default HomePage;
