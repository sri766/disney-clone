import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/counter/movies/movieSlice'

export const store = configureStore({
  reducer: {
    movie: movieReducer
  },
});
