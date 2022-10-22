import {Link, NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {genreActions} from "../../redux/slices/GenreSlice";

export default function Genres({genre}) {
    const {id, name} = genre;
    const dispatch = useDispatch();
    return (
        <div>
                <button onClick={() => dispatch(genreActions.getById({id}))}>{name}</button>

        </div>
    );
}