import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice.js";
import urlReducer from "../redux/urlSlice.js";

export const store = configureStore({
    reducer: {
        user: userReducer,
        url: urlReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
