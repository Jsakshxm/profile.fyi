import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState: {
        query:null
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        }
    }
})

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;