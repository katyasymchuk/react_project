import {urls} from "../configs";
import {axiosService} from "./axios.service";


const movieService = {

    getAll: (page = 1) => axiosService.get(`${urls.movies}`, {params: {page}}),
    getById: (id) => axiosService.get(`${urls.movie}${id}`),
    getSearch: (query, page = 1) => axiosService.get(`${urls.search}/movie?query=${query}`, {params: {page}}),
}

export {
    movieService
}







