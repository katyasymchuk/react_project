import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {Link} from "react-router-dom";


import css from "../Header/Header.module.css";

export default function SearchMovies() {
    const dispatch = useDispatch;
    const {searchMovie} = useSelector(state => state.movieReducer)
    const [query, setQuery] = useState("")


    // const filterMovies=movies.filter?(movies=>{movies.title.includes(value)
    // })

    // useEffect(()=>{
    //     dispatch(searchActions.getAll())
    // },[])

    return (
        <div>
            <div className={css.InputGroup}>
                <form className={css.search}>
                    <input type="text"
                           placeholder={"Search Movie"}
                           className={css.searchTerm}
                           value={query}
                           onChange={event => setQuery(event.target.value)}
                    />
                </form>
                <Link to={`/search/movie?query=${query}`}>
                    {/*<button className={css.unit} onClick={() => dispatch(movieActions.getSearch({name}))}>*/}
                    <i className="fa-solid fa-magnifying-glass"></i>
                    {/*</button>*/}
                </Link>
                {console.log(searchMovie)}


            </div>


        </div>
    );
}