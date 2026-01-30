import axios from "axios";

export const saveStatutoryRule = (data) =>
  axios.post("http://localhost:5000/api/statutory", data);

export const getStatutoryRules = () =>
  axios.get("http://localhost:5000/api/statutory");
