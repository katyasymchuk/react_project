import {urls} from "../configs";
import {axiosService} from "./axios.service";


const searchService = {

    getAll: (data)=>axiosService.get(`${urls.search}?query=${data}`),

}

export {
    searchService
}
// </ff>