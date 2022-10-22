import css from './Movie.module.css'
import Poster from "../Poster/Poster";
import StarRating from "../StarRating/StarRating";
import GenreBadge from "../GenreBadge/GenreBadge";


export default function Movie({movie}) {


    return (

        <div className={css.moviecard}>
            {movie.title}
            <div className={css.card} >
                <Poster key={movie.poster_path} movie={movie}/>
            </div>

            <StarRating key={movie.vote_average} movie={movie}/>
            <GenreBadge key={movie.genres_ids} movie={movie}/>

        </div>
    );
}
// </ff>