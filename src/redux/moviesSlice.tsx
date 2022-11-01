import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMoviesAPI } from '../service/useAPI';
import { initialMovieState } from '../utils/constants';

const initialState = {
  fetchStatus: '',
  sortBy: 'release_date',
  filterBy: '',
  data: [initialMovieState],
};

export const getMovies = createAsyncThunk(
  'get-movies',
  async (arg, { getState }) => {
    const { movies } = getState();
    const moviesResult = await getMoviesAPI(
      movies.sortBy,
      movies.filterBy,
      movies.data.length + arg
    );
    return moviesResult;
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    sortByAction: (state, action) => {
      state.sortBy = action.payload;
    },
    filterByAction: (state, action) => {
      state.filterBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.fetchStatus = 'success';
      })
      .addCase(getMovies.pending, (state) => {
        state.fetchStatus = 'loading';
      })
      .addCase(getMovies.rejected, (state) => {
        state.fetchStatus = 'error';
      });
  },
});

export default movieSlice;
