import axios from "axios";

const instance = axios.create({
  baseURL: "http://BACKENDLB-885286453.us-east-1.elb.amazonaws.com",
});

export default instance;
