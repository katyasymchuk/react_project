export default  function MoreInfoDetails({movie}) {

	return (
		<div>

			<div>
				Title: {movie.title} <br/>
				genres:<br/>
				{movie.genres?.map((genre) => genre.name).join(',')}<br/>
				<div>
					original language: {movie.original_language}
				</div>

			</div>
			<div>
				overview: {movie.overview} <br/>
				popularity: {movie.popularity} <br/>
				production_companies: {movie.production_companies?.map((production_companies) => production_companies.name)} <br/>
				production_countries: {movie.production_countries?.map((production_countries) => production_countries.name)} <br/>
				release_date: {movie.release_date} <br/>
				status: {movie.status} <br/>
				vote_average: {movie.vote_average} <br/>
				vote_count: {movie.vote_count} <br/>
		</div>

		</div>
	);
}