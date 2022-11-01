/* eslint-disable react/no-children-prop */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import MovieList from './MovieList';
import MovieCard from './MovieList/MovieCard';
import Filter from './Filter';
import { mockData } from '../service/mockData';
import { initialMovieState } from '../utils/constants';
import { getMovies } from '../redux/moviesSlice';
import { useAppDispatch } from '../redux/hooks';

export const HomePage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const [movieSelected, setMovieSelected] = useState(
    initialMovieState as MovieItem
  );

  const clickHandler = useCallback(
    (movie: MovieItem) => {
      setMovieSelected(movie);
    },
    [mockData.data]
  );

  const handleScroll = () => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      if (scrollTop + clientHeight === scrollHeight) {
        const moreMovies = 10;
        dispatch(getMovies(moreMovies));
      }
    }
  };

  return (
    <div className="content" ref={ref} onScroll={() => handleScroll()}>
      <Header movie={movieSelected} />
      <Filter />
      <MovieList children={MovieCard} eventHandler={clickHandler} />
      <Footer />
    </div>
  );
};
