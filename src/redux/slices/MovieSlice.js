import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {searchService} from "../../services/search.service";



const initialState = {
    movies: [],
    leading: false,
    error: null,
    movieFromAPI:null,
    searchMovie:null
    }

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)

        }
    }
)
const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByTitle = createAsyncThunk(
    'movieSlice/getByTitle',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await searchService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
// const getByGenre = createAsyncThunk(
//     'movieSlice/getByGenre',
//     async ({id}, {rejectWithValue}) => {
//         try {
//             const {data} = await movieService.getById(id);
//             return data
//         } catch (e) {
//             return rejectWithValue(e.response.data)
//         }
//     }
// );

// const getByGenreId = createAsyncThunk(
//     'movieSlice/getById',
//     async ({id}, {rejectWithValue}) => {
//         try {
//             const {data} = await movieService.getByGenreId(id);
//             return data
//         } catch (e) {
//             return rejectWithValue(e.response.data)
//         }
//     }
// );
const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload
            state.loading = false
        })
        .addCase(getById.fulfilled,(state, action) => {
            state.movieFromAPI = action.payload
        })
        .addCase(getByTitle.fulfilled, (state, action) => {
            state.searchMovie = action.payload
            state.loading = false
        })

})

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAll,
    getById,
    getByTitle

}

export {movieActions, movieReducer}