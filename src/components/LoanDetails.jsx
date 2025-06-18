import React from 'react';

const LoanDetails = ({ nextStage, prevStage, handleChange, values }) => {
  return (
    <div className="form-container">
      <h2>Loan Details</h2>
      <form>
        <label htmlFor="loanAmount">How much are you looking to borrow? (£)</label>
        <input
          type="number"
          id="loanAmount"
          placeholder="e.g., 5000"
          onChange={handleChange('loanAmount')}
          defaultValue={values.loanAmount}
        />

        <label htmlFor="repaymentFrequency">Repayment Frequency</label>
        <select
          id="repaymentFrequency"
          onChange={handleChange('repaymentFrequency')}
          defaultValue={values.repaymentFrequency}
        >
          <option value="">Select Frequency</option>
          <option value="Monthly">Monthly</option>
          <option value="Weekly">Weekly</option>
        </select>

        <label htmlFor="repaymentDuration">Repayment Duration (in years)</label>
        <input
          type="number"
          id="repaymentDuration"
          placeholder="e.g., 5"
          onChange={handleChange('repaymentDuration')}
          defaultValue={values.repaymentDuration}
        />

        <label htmlFor="loanReason">Reason for Loan</label>
        <textarea
          id="loanReason"
          placeholder="e.g., Home improvements, car purchase, etc."
          onChange={handleChange('loanReason')}
          defaultValue={values.loanReason}
        ></textarea>
        
        <div className="button-group">
          <button type="button" onClick={prevStage} className="button-secondary">Back</button>
          <button type="button" onClick={nextStage}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default LoanDetails;