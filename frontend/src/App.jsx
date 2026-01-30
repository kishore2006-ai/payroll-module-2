import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    country: "",
    pf: "",
    esi: "",
    pt: "",
  });

  const [rules, setRules] = useState([]);
  const [dark, setDark] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Save statutory rule
  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/statutory", {
        country: form.country,
        pfPercentage: Number(form.pf),
        esiPercentage: Number(form.esi),
        professionalTax: Number(form.pt),
      });

      alert("Statutory Configuration Saved Successfully");
      setForm({ country: "", pf: "", esi: "", pt: "" });
      fetchRules();
    } catch (error) {
      console.error(error);
      alert("Error saving data");
    }
  };

  // Fetch all rules
  const fetchRules = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/statutory");
      setRules(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRules();
  }, []);

  return (
    <div className={`page ${dark ? "dark" : ""}`}>
      {/* FORM CARD */}
      <div className="card fade-in">
        <div className="header">
          <h2>Module 2</h2>
          <p>Statutory & Compliance Configuration</p>
          <button className="toggle" onClick={() => setDark(!dark)}>
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <input
          name="country"
          placeholder="Country"
          value={form.country}
          onChange={handleChange}
        />
        <input
          name="pf"
          placeholder="PF Percentage"
          value={form.pf}
          onChange={handleChange}
        />
        <input
          name="esi"
          placeholder="ESI Percentage"
          value={form.esi}
          onChange={handleChange}
        />
        <input
          name="pt"
          placeholder="Professional Tax"
          value={form.pt}
          onChange={handleChange}
        />

        <button className="save-btn" onClick={handleSubmit}>
          Save
        </button>
      </div>

      {/* DASHBOARD CHART */}
      {rules.length > 0 && <Dashboard rules={rules} />}

      {/* TABLE */}
      <div className="table-card fade-in">
        <h3>Saved Statutory Rules</h3>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>PF %</th>
              <th>ESI %</th>
              <th>PT</th>
            </tr>
          </thead>
          <tbody>
            {rules.map((r) => (
              <tr key={r._id}>
                <td>{r.country}</td>
                <td>{r.pfPercentage}</td>
                <td>{r.esiPercentage}</td>
                <td>{r.professionalTax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
