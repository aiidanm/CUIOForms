import React, { useState } from "react";
import HomePage from "./components/HomePage";
import PersonalDetails from "./components/personalDetails";
import "./App.css";

function App() {
  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    dob: "",
    email: "",
    phoneNumber: "",
    address: "",
    customerId: "",
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
          handleChange={handleChange}
          values={formData}
        />
      );
    default:
      return <HomePage nextStage={nextStage} />;
  }
}

export default App;
