import {useSelector} from "react-redux";

import css from './GenreBadge.module.css'


export default function GenreBadge({movie}) {


    const {genre_ids} = movie

    const {genres: data} = useSelector(state => state.genreReducer);

    const array = data.genres ? data.genres : []
    const genreOfMovie = []

    array.map((item) => {
            if (genre_ids.includes(item.id)) {
                genreOfMovie.push(item.name)
            }
        }
    )

    return (
        <div className={css.genrename}>

            <h3>
                {genreOfMovie.join(',')}
            </h3>

        </div>
    );
}
