import { configureStore } from "@reduxjs/toolkit";
import { musicSlice } from "./reducers/reducerMusic";

export const store = configureStore({
    reducer: {
        music: musicSlice.reducer
    }
})