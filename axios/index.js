import axios from "axios";

const instance = axios.create({
  baseURL: "https://dev.6amtech.com/efood/api/v1",
});

export default instance;
