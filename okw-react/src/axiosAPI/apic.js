import axios from "axios";
import getCookie from "../utils/getCookie";
const apic = axios.create({
  baseURL: "http://localhost:8000/api/",
  withCredentials: true
})
  

export default apic;