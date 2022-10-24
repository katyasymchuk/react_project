import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies: [],
    leading: false,
    error: null,
    movieFromAPI: null,
    searchMovie: null,
    page: null,

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
const getSearch = createAsyncThunk(
    'movieSlice/getSearch',
    async ({name, page}, {rejectWithValue}) => {

        try {
            const {data} = await movieService.getSearch(name, page)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)

        }

    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload
            state.loading = false
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.movieFromAPI = action.payload
        })
        .addCase(getSearch.fulfilled, (state, action) => {
            state.searchMovie = action.payload
            state.loading = false
        })
        .addCase(getAll.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        })
        .addCase(getAll.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getById.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        })
        .addCase(getById.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getSearch.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        })
        .addCase(getSearch.pending, (state, action) => {
            state.loading = true
        })

})

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAll,
    getById,
    getSearch

}

export {movieActions, movieReducer}
