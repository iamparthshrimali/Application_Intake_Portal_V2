import axios from "axios";

export const registerCustomerAPI = async (data) => {
  const res = await axios.post("http://localhost:8080/registerCustomer", data);

  return res;
};
