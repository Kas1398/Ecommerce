import axios from "axios";

const instance = axios.create({
    baseURL: "https://kasecommerce.onrender.com/",
});

export default instance;
