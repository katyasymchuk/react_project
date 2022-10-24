import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {genreActions} from "../../redux";

export default function Genres({genre}) {
    const {id, name} = genre;
    const dispatch = useDispatch();
    return (
        <div>
            {/*<Link to={`/discover/movie/with_genres=${genre.id}`}>*/}
            <button onClick={() => dispatch(genreActions.getById({id}))}>
                {name}
            </button>
            {/*</Link>*/}


        </div>
    );
}