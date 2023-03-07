import axios from "axios";

const instance = axios.create({
    baseURL: "https://kass-ecommerce.netlify.app/",
});

export default instance;
