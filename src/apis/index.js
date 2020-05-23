import Axios from "axios";

const baseUrl= "https://jsonplaceholder.typicode.com/";

Axios.create({
    url: baseUrl
});