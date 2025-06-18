import React from 'react';

// Receive prevStage as a prop
const PersonalDetails = ({ nextStage, prevStage, handleChange, values }) => {
  return (
    <div className="form-container">
      <h2>Personal Details</h2>
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
        />
        <input
          type="text"
          placeholder="Surname"
          onChange={handleChange('surname')}
          defaultValue={values.surname}
        />
        <input
          type="date"
          placeholder="Date of Birth"
          onChange={handleChange('dob')}
          defaultValue={values.dob}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange('email')}
          defaultValue={values.email}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          onChange={handleChange('phoneNumber')}
          defaultValue={values.phoneNumber}
        />
        <input
          type="text"
          placeholder="Address"
          onChange={handleChange('address')}
          defaultValue={values.address}
        />
        <input
          type="text"
          placeholder="Current Customer ID"
          onChange={handleChange('customerId')}
          defaultValue={values.customerId}
        />
        
        {/* Add a button group for navigation */}
        <div className="button-group">
          <button type="button" onClick={prevStage} className="button-secondary">Back</button>
          <button type="button" onClick={nextStage}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;