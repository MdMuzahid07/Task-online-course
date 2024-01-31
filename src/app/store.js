import { configureStore } from '@reduxjs/toolkit';
import courseSlice from '../features/courses/courseSlice';

const ConfigureStore = configureStore({
    reducer: { courses: courseSlice }
});

export default ConfigureStore;