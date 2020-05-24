import Axios from "axios";

const baseUrl= "https://jsonplaceholder.typicode.com/";

export default Axios.create({
    baseURL: baseUrl
});