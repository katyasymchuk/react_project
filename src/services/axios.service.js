import axios from "axios";
import {baseURL} from "../configs";
import {createBrowserHistory} from "history";


export const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDBmNDdhNDNiMjhlNTMyOTQ3ZDAzMzM0ZTdjNWM0ZiIsInN1YiI6IjYzNGFiOTllMWIxZjNjMDA3YzBmNjA0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.API7vhEgYPI5qq1guSSHx7PE0wPiv74mrUvgOlKGUQo'
const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${API_KEY}`
    return config
})
const history = createBrowserHistory();

export {
    axiosService,
    history
}
// </ff>