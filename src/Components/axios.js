import axios from "axios";

const instance = axios.create({
  baseURL: "http://backendlb-1541065125.us-east-1.elb.amazonaws.com/",
});

export default instance;
