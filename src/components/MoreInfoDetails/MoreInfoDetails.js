import './MoreInfoDetails.css';
import Poster from "../Poster/Poster";


export default function MoreInfoDetails({movie}) {


    return (
        <div className={"details"}>
            <Poster key={movie.poster_path} movie={movie}/>
            <div className={"details_details"}>
                <div>
                    Title: {movie.title} <br/>
                </div>
                <div>
                    Genres:<br/>
                    {movie.genres?.map((genre) => genre.name).join(',')}<br/>
                </div>
                <div>
                    Original language: {movie.original_language}
                </div>
                <div>
                    Overview: {movie.overview} <br/>
                </div>
                <div>
                    Popularity: {movie.popularity} <br/>
                </div>
                <div>
                    Production
                    companies: {movie.production_companies?.map((production_companies) => production_companies.name)}
                    <br/>
                </div>


                <div>
                    Production
                    countries: {movie.production_countries?.map((production_countries) => production_countries.name)}
                    <br/>
                </div>
                <div>
                    Release date: {movie.release_date} <br/>
                </div>
                <div>
                    Status: {movie.status} <br/>
                </div>
                <div>
                    Vote average: {movie.vote_average} <br/>
                </div>
                <div>
                    Vote count: {movie.vote_count} <br/>
                </div>
            </div>

        </div>
    );
}
