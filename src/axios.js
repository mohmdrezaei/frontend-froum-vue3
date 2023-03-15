import axios from "axios";

export let baseUrl = 'http://froum.test/api/'

const Axios =axios.create({
    baseURL : `${baseUrl}v1/`
});
Axios.defaults.withCredentials = true;

export default Axios;