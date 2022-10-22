import {useEffect} from "react";

import Movie from "../Movie/Movie";

import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import css from './Movies.module.css'
import {useParams, useSearchParams} from "react-router-dom";
import {genreActions,} from "../../redux/slices/GenreSlice";
import {FindGenre} from "../FindGenre/FindGenre";
// </ff>

const Movies = ()=>{

    const dispatch = useDispatch()
        // const {id} = useParams();
    const {movies} =  useSelector(state => state.movieReducer)
    // const {genreFromAPI} =  useSelector(state => state.genreReducer)
    const [queryMovie, setQueryMovie] = useSearchParams({page: '1'})


    useEffect(()=>{
        dispatch(movieActions.getAll())
    },[])

    // useEffect(() => {
    //     dispatch(genreActions.getById({id}))
    // }, [dispatch,id])

    useEffect(() => {
        dispatch(movieActions.getAll(queryMovie.get('page')))
    }, [queryMovie])

    const prevPage = () => {
        setQueryMovie(value => ({page: value.get('page') - 1}))
    }
    const nextPage = () => {
        setQueryMovie(value => ({page: +value.get('page') + 1}))
    }

    return (
        <div>
            <div className={css.movies}>


                {movies.results?.map(movie=><Movie key={movie.id} movie={movie}/>)}

            </div>



<div className={css.button}>
    <button  onClick={prevPage}><i className="fa-solid fa-chevron-left"></i></button>

    <button  onClick={nextPage}><i className="fa-solid fa-chevron-right"></i></button>
</div>

        </div>
    );
}
export {
    Movies
}
