import { useState } from "react";

export default function FormComponent() {
  const [formData, setFormData] = useState({
    checkbox: false,
    number: "",
    select1: "",
    select2: "",
    select3: "",
    text: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <input
          type="checkbox"
          id="checkbox"
          onChange={(e) => handleChange("checkbox", e.target.checked)}
        />
        <label htmlFor="checkbox" style={{ marginLeft: "8px" }}>
          Check this box
        </label>
      </div>

      <input
        type="number"
        placeholder="Enter a number"
        value={formData.number}
        onChange={(e) => handleChange("number", e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <select
        onChange={(e) => handleChange("select1", e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      >
        <option value="">Select Option 1</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <select
        onChange={(e) => handleChange("select2", e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      >
        <option value="">Select Option 2</option>
        <option value="optionA">Option A</option>
        <option value="optionB">Option B</option>
        <option value="optionC">Option C</option>
      </select>

      <select
        onChange={(e) => handleChange("select3", e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      >
        <option value="">Select Option 3</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>

      <textarea
        placeholder="Enter text here"
        value={formData.text}
        onChange={(e) => handleChange("text", e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          height: "80px",
          marginBottom: "10px",
        }}
      />

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
}
