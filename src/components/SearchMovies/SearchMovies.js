import css from "../Header/Header.module.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {movieActions} from "../../redux";
import {Link} from "react-router-dom";
import Movie from "../Movie/Movie";
import {searchActions} from "../../redux/slices/SearchSlice";


export default function SearchMovies(props) {
    const dispatch = useDispatch;
    const [value, setValue] = useState('')
    const {search} = useSelector(state => state.searchReducer)

    // const filterMovies=movies.filter?(movies=>{movies.title.includes(value)
    // })

    // useEffect(()=>{
    //     dispatch(searchActions.getAll())
    // },[])

    return (
        <div>
            <div className={css.InputGroup}>
                <form>

                    <input
                        type="text"
                        placeholder="The name of the movie"
                        onChange={(event) => setValue(event.target.value)}
                        value={query}

                    />

                    <Link to={`/search/movie?query=${value}`}>
                        <button className={css.unit}><i
                            className="fa-solid fa-magnifying-glass"></i></button>
                    </Link>

                </form>
                {/*onClick={() => dispatch(movieActions.getByTitle({value}))}*/}
                {console.log(search)}
                {/*<div className="movies">*/}
                {/*    {search.results?.map(movie => <Movie key={movie.id} movie={movie}/>)}*/}
                {/*</div>*/}

                {/*// </ff>*/}

            </div>


        </div>
    );
}