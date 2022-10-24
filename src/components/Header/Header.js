import {NavLink} from "react-router-dom";


import css from './Header.module.css';
import SearchMovies from "../SearchMovies/SearchMovies";


export default function Header() {


    return (
        <div className={css.header}>

            <NavLink to={`/`}>
                <div className={css.logo}>
                    <h3>MOVIES by Kate </h3>
                    <div>enjoy watching</div>
                </div>
            </NavLink>
            <NavLink to={`/discover/movie`}>All Movies</NavLink>
            <NavLink to={`/genre/movie/list`}>Genres
            </NavLink>
            <SearchMovies/>

        </div>
    );
}
