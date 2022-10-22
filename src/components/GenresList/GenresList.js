import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../redux/slices/GenreSlice";
import Genres from "../Genres/Genres";
import css from './GenresList.module.css'
import {FindGenre} from "../FindGenre/FindGenre";


const GenresList = () => {

    const dispatch = useDispatch()
    const {genres} = useSelector(state => state.genreReducer)


    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [])


    return (

        <div className={css.genres}>


    {genres.genres?.map(genre => <Genres key={genre.id} genre={genre}/>)}


        </div>
    );
}
export {GenresList}
// </ff>