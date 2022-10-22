import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import MoreInfoDetails from "../MoreInfoDetails/MoreInfoDetails";

const MovieInfo = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {movieFromAPI} = useSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(movieActions.getById({id}))
    }, [id]);


    return (
        <div>

            {movieFromAPI && (<MoreInfoDetails movie={movieFromAPI}/>)}

        </div>
    );
}
export {
    MovieInfo
}
// </ff>