import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Features/themeSlice.js";

export const store=configureStore({
    reducer:themeReducer
});