import {axiosService} from "./axios.service";
import {urls} from "../configs";
const genreService = {

    getAll: () => axiosService.get(urls.genres),
    getById:(id,page=1)=>axiosService.get(`${urls.movies}?with_genres=${id}`,{params:{page}}),
    // getByPage:(id,page=1)=>axiosService.get(`${urls.movies}?with_genres=${id}`,{params:{page}})
}

export {
    genreService
}