import { useState } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    country: "",
    pf: "",
    esi: "",
    pt: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/statutory", {
        country: form.country,
        pfPercentage: form.pf,
        esiPercentage: form.esi,
        professionalTax: form.pt
      });
      alert("Statutory Configuration Saved Successfully");
    } catch (error) {
      alert("Error saving data");
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>Module 2 – Statutory & Compliance Configuration</h2>

      <input
        name="country"
        placeholder="Country"
        onChange={handleChange}
      /><br /><br />

      <input
        name="pf"
        placeholder="PF Percentage"
        onChange={handleChange}
      /><br /><br />

      <input
        name="esi"
        placeholder="ESI Percentage"
        onChange={handleChange}
      /><br /><br />

      <input
        name="pt"
        placeholder="Professional Tax"
        onChange={handleChange}
      /><br /><br />

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default App;
