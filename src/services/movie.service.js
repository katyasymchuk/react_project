import {urls} from "../configs";
import {axiosService} from "./axios.service";


const movieService = {

    // getAll: (page) => axiosService.get(`${urls.movies}?page=${page}`),
    getAll: (page=1)=>axiosService.get(`${urls.movies}`,{params:{page}}),
    getById:(id)=>axiosService.get(`${urls.movie}${id}`)

}

export {
    movieService
}















