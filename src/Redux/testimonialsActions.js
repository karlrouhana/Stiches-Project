import axios from "axios";
import { testimonialsActions } from "./testimonialsReducer";


export const getTestimonialsAction = () => {
    return async (dispatch) => {
        dispatch(testimonialsActions.getTestimonialsRequest())
        try {
            const response = await axios.get("http://192.168.18.188:8001/testimonial/published");
            dispatch(testimonialsActions.getTestimonialsSuccess(response.data));
        } catch (error) {
            dispatch(testimonialsActions.getTestimonialsFailure());
        }
    };
}