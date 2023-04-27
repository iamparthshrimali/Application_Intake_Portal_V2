import axios from "axios";

export const loginAPI = async (data) => {
  const res = await axios.post("http://localhost:8080/login", data);

  return res;
};
