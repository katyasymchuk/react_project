import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";


import Movie from "../Movie/Movie";
import css from './Movies.module.css'
import {movieActions} from "../../redux";


const Movies = () => {

    const dispatch = useDispatch()

    const {movies, error, loading} = useSelector(state => state.movieReducer)

    const [queryMovie, setQueryMovie, page] = useSearchParams({page: '1'})


    useEffect(() => {
        dispatch(movieActions.getAll())
    }, [])

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

                {loading && <p>Loading........................</p>}
                {error && <p>Error</p>}
                {movies.results?.map(movie => <Movie key={movie.id} movie={movie}/>)}

            </div>


            <div className={css.Button}>
                <button onClick={prevPage}><i className="fa-solid fa-chevron-left"></i></button>

                <button onClick={nextPage}><i className="fa-solid fa-chevron-right"></i></button>
            </div>

        </div>
    );
}
export {
    Movies
}
