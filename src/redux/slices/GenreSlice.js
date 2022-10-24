import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


import {genreService} from "../../services";


const initialState = {
    genres: [],
    leading: false,
    error: null,
    genreFromAPI: null,
    queryPage: 1
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
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getById(id, page);
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
        .addCase(getById.fulfilled, (state, action) => {
            state.genreFromAPI = action.payload
        })
        .addCase(getByPage.fulfilled, (state, action) => {
            state.genreFromAPI = action.payload
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
        .addCase(getByPage.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        })
        .addCase(getByPage.pending, (state, action) => {
            state.loading = true
        })

})
const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getAll,
    getById,
    getByPage

}

export {genreActions, genreReducer}
