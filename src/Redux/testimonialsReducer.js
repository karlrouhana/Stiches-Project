import { createSlice } from "@reduxjs/toolkit";
import Testimonials from "../Pages/Testimonials/Testimonials";

const initialState = {
    getTestimonials: [],
    getTestimonialsLoading: false,
    getTestimonialsSuccess: false,
    getTestimonialsError: null
}

const testimonialsSlice = createSlice({
    name: 'testimonials',
    initialState,
    reducers: {
        getTestimonialsRequest: (state) => {
            state.getTestimonialsLoading = true;
            state.getTestimonials= "";
            state.getTestimonialsSuccess = false;
            state.getTestimonialsError = null;
        },
        getTestimonialsSuccess: (state, action) => {
            state.getTestimonialsLoading = false;
            state.getTestimonialsSuccess = true;
            state.getTestimonials = action.payload;
            state.getTestimonialsError = false
        },
        getTestimonialsFailure: (state, action) => {
            state.getTestimonialsLoading = false;
            state.getTestimonialsError = action.payload;
            state.getTestimonialsSuccess = false;
        }
    },
})

export const testimonialsActions = testimonialsSlice.actions;
export default testimonialsSlice.reducer;