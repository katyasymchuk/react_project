import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {genreActions} from "../../redux/slices/GenreSlice";
import Movie from "../Movie/Movie";
import css from "../Movies/Movies.module.css";


const FindGenre = () => {

    const dispatch = useDispatch()
    const {id} = useParams();
    const {genreFromAPI} =  useSelector(state => state.genreReducer)
    const [query, setQuery] = useSearchParams({page: '1'})


    useEffect(() => {
        dispatch(genreActions.getById({id}))
    }, [dispatch,id])


    useEffect(() => {
        dispatch(genreActions.getByPage(query.get('page')))
    }, [query,dispatch])




    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    }
    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    }

    return (
        <div>
        <div className={css.movies}>


            {genreFromAPI&&genreFromAPI.results?.map(genres=><Movie key={genres.id} movie={genres}/>)}
        </div>
            <div className={css.button}>
            <button  onClick={prevPage}><i className="fa-solid fa-chevron-left"></i></button>

            <button  onClick={nextPage}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    );
}
// </ff>
export {
    FindGenre
}
