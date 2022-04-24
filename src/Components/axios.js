import axios from "axios";

const instance = axios.create({
  baseURL: "http://backendlb-1541065125.us-east-1.elb.amazonaws.com",
    headers: {
      'Access-Control-Allow-Credentials':true,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRhNGE5NGM2NjczOGYxMzg1NGI0NzQiLCJ1c2VybmFtZSI6ImFtcnpha2kiLCJpYXQiOjE2NTA3OTg3MDR9.rubqGuQ7HdZZNnWxValrJWdHVGbxtXv1fY5N9dXhneI',
    }
});

export default instance;
