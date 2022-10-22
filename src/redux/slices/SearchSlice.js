import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {searchService} from "../../services/search.service";



const initialState = {
   search: [],
    leading: false,
    error: null,
    searchMovie:null
}

const getAll = createAsyncThunk(
    ' searchSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await  searchService.getAll()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)

        }
    }
)

const  searchSlice = createSlice({
    name: ' searchSlice',
    initialState,
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state. search = action.payload
            state.loading = false
        })

})

const {reducer:  searchReducer} =  searchSlice;

const  searchActions = {
    getAll
}

export { searchActions,  searchReducer}
// </ff>