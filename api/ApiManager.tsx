import axios from "axios";

const ApiManager = axios.create({
  baseURL: "https://reqres.in/api",
  responseType: "json",
//   timeout: 10000, // Set a timeout for requests (in milliseconds)
//   headers: {
//     "Content-Type": "application/json",
//     // Add any other headers you need here
//   },
});

export default ApiManager;