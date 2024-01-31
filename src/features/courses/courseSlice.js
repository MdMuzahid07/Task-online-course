

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchCourses from "./courseApi";

const initialState = {
    courses: [],
    isLoading: false,
    isError: false,
    error: ""
};

export const fetchCourseData = createAsyncThunk("courses/coursesData", async () => {
    const courses = fetchCourses();
    return courses;
});



const courseSlice = createSlice({
    initialState,
    name: "courses",
    extraReducers: (builder) => {
        builder.addCase(fetchCourseData.pending, (state) => {
            state.isLoading = true,
                state.courses = [],
                state.isError = false
        });
        builder.addCase(fetchCourseData.fulfilled, (state, action) => {
            state.isLoading = false,
                state.courses = action.payload,
                state.isError = false
        });
        builder.addCase(fetchCourseData.rejected, (state, action) => {
            state.isError = true,
                state.error = action.error.message;
        })
    }
});


export default courseSlice.reducer;