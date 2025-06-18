import React, { useState } from "react";
import HomePage from "./components/HomePage";
import PersonalDetails from "./components/personalDetails";
import LoanDetails from "./components/LoanDetails";
import "./App.css";

function App() {
  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: "",
    surname: "",
    dob: "",
    email: "",
    phoneNumber: "",
    address: "",
    customerId: "",
    // Loan Details
    loanAmount: "",
    repaymentFrequency: "Monthly", // Default value
    repaymentDuration: "",
    loanReason: "",
  });

  const nextStage = () => {
    setStage((prevStage) => prevStage + 1);
  };

  const prevStage = () => {
    setStage((prevStage) => prevStage - 1);
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  switch (stage) {
    case 1:
      return <HomePage nextStage={nextStage} />;
    case 2:
      return (
        <PersonalDetails
          nextStage={nextStage}
          prevStage={prevStage} // Pass prevStage function
          handleChange={handleChange}
          values={formData}
        />
      );
    case 3: // Add case for the new stage
      return (
        <LoanDetails
          nextStage={nextStage}
          prevStage={prevStage}
          handleChange={handleChange}
          values={formData}
        />
      );
    // Add more cases for subsequent stages
    default:
      return <HomePage nextStage={nextStage} />;
  }
}

export default App;
