import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    url: null,
};

const urlSlice = createSlice({
    name: "url",
    initialState,
    reducers: {
        addNewUrlStart: (state) => {
            state.loading = true;
        },

        addNewUrlSuccess: (state, action) => {
            state.loading = false;
            state.url = action.payload;
            state.error = null;
        },

        addNewUrlFailure: (state, action) => {
            state.loading = false;
            state.url = null;
            state.error = action.payload;
        },
    },
});

export const { addNewUrlStart, addNewUrlSuccess, addNewUrlFailure } =
    urlSlice.actions;

export default urlSlice.reducer;
