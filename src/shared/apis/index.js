import Axios from "axios";

//const baseUrl= "https://jsonplaceholder.typicode.com/";
//const baseUrl= "http://localhost:3001/";

const baseUrl  = process.env.REACT_APP_API_ENDPOINT;

export default Axios.create({
    baseURL: baseUrl
});