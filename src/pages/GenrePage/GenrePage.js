import {GenresList} from "../../components/GenresList/GenresList";
import {FindGenre} from "../../components/FindGenre/FindGenre";

const GenrePage=() => {
    return (
        <div>
            <GenresList/>
            <FindGenre/>
        </div>
    );
}
export {GenrePage}