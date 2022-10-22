import {CBadge} from "@coreui/react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {genreActions} from "../../redux/slices/GenreSlice";
import {movieActions} from "../../redux";
import css from './GenreBadge.module.css'


export default function GenreBadge({movie}) {

    // const {id} = useParams();
    // const dispatch = useDispatch();
    const {genre_ids} = movie
    // const {movies:movie} = useSelector(state => state.movieReducer);
    const {genres: data} = useSelector(state => state.genreReducer);

    const array = data.genres ? data.genres : []
    const genreOfMovie = []

    array.map((item) => {
            if (genre_ids.includes(item.id)) {
                genreOfMovie.push(item.name)
            }
        }
    )
// </ff>

    // const {movies} = useSelector(state => state.movieReducer);

    // useEffect(() => {
    // 	dispatch(movieActions.getById({id}))
    // }, [id]);

// let genre=[];
//
// for (let i=0,j=0; i<movie.length;i++){
// 	if(movie.genre_ids===genres.id){
// 		genres[j]=movies[i];
// 		j++
// 	}
//
// }

// for(genre of genres){
// 	for(movie of movies){
// 		genre.id===movie.genre_ids
// 		return genre.id
// 	}
//
// }
// 	for (let i = 0; i < i.length; i++) {
// 		for (let j = 0; j < j.length; j++) {
// 			if(genres[i]===movie[j]){
// 				return genre
// 			}
//
// 		}
//
// 	}
// 	const getGenres = movie.movie?.map(movies => {
// 		if (movies.genre_ids === 12) return "Adventure"
// 		else if (movies.genre_ids === 27) return "Horror"
// 		else if (movies.genre_ids === 28) return "Action"
// 	});

    // const getGenres = movie.movie?.map(movies => {
    // 	for (let i = 0; i < movies.length; i++) {
    // 		if (movies.genre_ids[0] === genres[i].id) return genres[i].name
    // 	}
    // });
    // const getGenres = movie.movie?.map(({genre_ids }) => {
    // 	const genreNames = genre_ids.map(gid => genres
    // 		.find(({ id }) => id === gid).name);
    // 	return {
    // 		genres: genreNames
    // 	}
    // });
    return (
        <div className={css.genrename}>
            {/*{movie.movie?.map(movie.genre_ids=>genres.id)}*/}
            {/*{getGenres}*/}
           <h3>
               {genreOfMovie.join(',')}
           </h3>
            {/*{console.log(data.name)}*/}
            {/*{console.log(movie.genre_ids)}*/}
            {/*<CBadge color="secondary">{genres.name}</CBadge>*/}
        </div>
    );
}
