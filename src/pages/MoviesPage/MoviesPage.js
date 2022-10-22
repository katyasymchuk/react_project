import {useEffect} from "react";
import {NavLink, Outlet, useParams, useSearchParams} from "react-router-dom";




import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";

import './MoviePage.module.css'
import {Movies} from "../../components";
import {GenresList} from "../../components/GenresList/GenresList";
import {genreActions} from "../../redux/slices/GenreSlice";
import {FindGenre} from "../../components/FindGenre/FindGenre";


const MoviesPage = () => {
    // const {id} = useParams();
    // const dispatch = useDispatch();
    // const [query, setQuery] = useSearchParams({page: '1'})
    //
    //
    // useEffect(() => {
    //     dispatch(movieActions.getAll(query.get('page')))
    // }, [query])
    //
    // const prevPage = () => {
    //     setQuery(value => ({page: value.get('page') - 1}))
    // }
    // const nextPage = () => {
    //     setQuery(value => ({page: +value.get('page') + 1}))
    // }
    //
    // useEffect(() => {
    //     dispatch(genreActions.getById({id}))
    // }, [dispatch,id])

    return (
        <div>

            {/*<GenresList/>*/}

            <Movies/>

            {/*<button onClick={() => {*/}
            {/*    setQuery(value => ({page:'1'}))*/}
            {/*}}><i className="fa-solid fa-angles-left"></i></button>*/}

            {/*<button disabled={'page' ===1} onClick={prevPage}><i className="fa-solid fa-chevron-left"></i></button>*/}

            {/*<button disabled={query === 501} onClick={nextPage}><i className="fa-solid fa-chevron-right"></i></button>*/}

            {/*<button onClick={() => {*/}
            {/*    setQuery(value => ({page:'500'}))*/}
            {/*}}><i className="fa-solid fa-angles-right"></i></button>*/}
        </div>

    )

}
export {
    MoviesPage
}
// </ff>