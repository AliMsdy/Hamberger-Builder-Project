import axios from "axios";

let instance = axios.create({
  baseURL: "https://humberger-builder-default-rtdb.firebaseio.com/",
});

export default instance;
