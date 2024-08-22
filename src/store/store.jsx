import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducers/movieSlice';
import tvReducer from './reducers/tvSlice'; // Importing the reducer correctly

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        tv: tvReducer,  // Using the correct reducer here
    },
});

export default store;
