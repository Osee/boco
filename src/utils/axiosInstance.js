import axios from "axios";

const baseURL = ""
let headers = {}
const axiosInstance = axios.create({
    baseURL,
    headers
});

export default axiosInstance;