import StarRatings from "react-star-ratings/build/star-ratings";
import css from './StarRating.module.css'

export default function StarRating({movie}) {


    return (
        <div className={css.StarRating}>
            <StarRatings
                rating={movie.vote_average}
                starRatedColor="blue"
                numberOfStars={10}
                starDimension={19}
                starRatedColor={'rgb(161,3,42)'}
                starEmptyColor={'rgb(245,225,228)'}

            />
        </div>
    );
}
// </ff>
