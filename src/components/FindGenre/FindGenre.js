import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";



import css from "../Movies/Movies.module.css";
import {GenresList} from "../GenresList";
import {genreActions} from "../../redux";
import Movie from "../Movie/Movie";



const FindGenre = () => {

    const dispatch = useDispatch()
    const {id} = useParams();
    const {genreFromAPI, error, loading} = useSelector(state => state.genreReducer)
    let [queryPage, setQueryPage] = useSearchParams({page: '1'});


    useEffect(() => {
        dispatch(genreActions.getById({page: queryPage.get('page')}))
    }, [queryPage, dispatch, id])


    const prevPage = () => {
        setQueryPage(value => ({page: value.get('page') - 1}))
    }
    const nextPage = () => {
        setQueryPage(value => ({page: +value.get('page') + 1}))
    }

    return (
        <div>
            <GenresList/>
            <div className={css.movies}>
                {/*{loading && <p>Loading........................</p>}*/}
                {error && <p>Error</p>}
                {genreFromAPI && genreFromAPI.results?.map(genres => <Movie key={genres.id} movie={genres}/>)}
            </div>
            <div className={css.Button}>
                <button onClick={prevPage}><i className="fa-solid fa-chevron-left"></i></button>

                <button onClick={nextPage}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    );
}
export {
    FindGenre
}
