import {NavLink} from "react-router-dom";


export default function Poster({movie}) {

    const API_IMG = "https://image.tmdb.org/t/p/w500";


    return (

        <div>
            <NavLink to={`/movie/${movie.id}`}>
                <img src={API_IMG + movie.poster_path} alt={movie.title}/>
            </NavLink>


        </div>
    );
}
