import { configureStore } from "@reduxjs/toolkit";
import testimonialsReducer from "./Redux/testimonialsReducer";

export const store = configureStore({
    reducer: {
    testimonials: testimonialsReducer
    }
})