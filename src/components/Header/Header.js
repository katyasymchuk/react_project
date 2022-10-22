import {NavLink} from "react-router-dom";
import css from './Header.module.css';
import ReactSwitch from "react-switch";
import {genreActions} from "../../redux/slices/GenreSlice";
import {useDispatch} from "react-redux";
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
            {/*<div className={css.InputGroup}>*/}
            {/*    <label>*/}
            {/*        <input type="text" placeholder="The name of the movie"/>*/}
            {/*    </label>*/}
            {/*    <button className={css.unit} onClick={() => dispatch(genreActions.getById({id}))}>{name}><i className="fa-solid fa-magnifying-glass"></i></button>*/}
            {/*</div>*/}
        </div>
    );
}
// </ff>