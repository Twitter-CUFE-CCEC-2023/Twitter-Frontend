import axios from "axios";

const instance = axios.create({
  baseURL: "https://backlb.twittercloneteamone.tk",
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default instance;