import axios from "axios";

export const validateAPI = async (data) => {
  const res = await axios.post("http://localhost:8080/validateCustomer", data);

  return res;
};
