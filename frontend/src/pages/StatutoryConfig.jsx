import { useState } from "react";
import { saveStatutoryRule } from "../services/api";

function StatutoryConfig() {
  const [form, setForm] = useState({
    country: "",
    pfPercentage: "",
    esiPercentage: "",
    professionalTax: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    await saveStatutoryRule(form);
    alert("Statutory Rules Saved Successfully");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Statutory Configuration</h2>

      <input name="country" placeholder="Country"
        className="input" onChange={handleChange} />
      <input name="pfPercentage" placeholder="PF %"
        className="input" onChange={handleChange} />
      <input name="esiPercentage" placeholder="ESI %"
        className="input" onChange={handleChange} />
      <input name="professionalTax" placeholder="Professional Tax"
        className="input" onChange={handleChange} />

      <button onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded">
        Save
      </button>
    </div>
  );
}

export default StatutoryConfig;
