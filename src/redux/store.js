import {combineReducers,configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices";
import {genreReducer} from "./slices/GenreSlice";
import {searchReducer} from "./slices/SearchSlice";





const rootReducer = combineReducers({
    movieReducer,
    genreReducer,
    searchReducer
})

const setupStore = () => configureStore({
    reducer:rootReducer
})

export {setupStore}