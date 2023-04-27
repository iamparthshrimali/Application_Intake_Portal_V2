import axios from "axios";

export const registerAPI = async (data) => {
  const res = await axios.post("http://localhost:8080/register", data);

  return res.data;
};
