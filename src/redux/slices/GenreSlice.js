import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services/genre.service";
import {movieService} from "../../services";

const initialState = {
    genres: [],
    leading: false,
    error: null,
    genreFromAPI:null
}

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll(page)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)

        }
    }
)
const getById = createAsyncThunk(
    'genreSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByPage = createAsyncThunk(
    'genreSlice/getByPage',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getById(page);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.genres = action.payload
            state.loading = false
        })
        .addCase(getById.fulfilled,(state, action) => {
            state.genreFromAPI = action.payload
        })
        .addCase(getByPage.fulfilled,(state, action) => {
            state.genreFromAPI = action.payload
        })

})
const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getAll,
    getById,
    getByPage

}

export {genreActions,genreReducer}
// </ff>