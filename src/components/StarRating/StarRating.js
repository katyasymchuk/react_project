import StarRatings from "react-star-ratings/build/star-ratings";


export default function StarRating({movie}) {


    return (
        <div>
            <StarRatings
                rating={movie.vote_average}
                starRatedColor="blue"
                numberOfStars={10}
                starDimension={19}
                starRatedColor={'rgb(161,3,42)'}
                starEmptyColor={'rgb(246,193,201)'}

            />
        </div>
    );
}

