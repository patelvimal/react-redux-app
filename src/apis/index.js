import Axios from "axios";

//const baseUrl= "https://jsonplaceholder.typicode.com/";
const baseUrl= "http://localhost:3001/";

export default Axios.create({
    baseURL: baseUrl
});