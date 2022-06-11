import axios from "axios";

const instance = axios.create({
  baseURL: "https://attendance-backend-01.herokuapp.com/api/v1",
});

export default instance;
