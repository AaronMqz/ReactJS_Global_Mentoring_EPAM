import React, { useState, useCallback } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MovieList from "./MovieList";
import MovieCard from "./MovieList/MovieCard";
import Filter from "./Filter";
import { mockData } from "../service/mockData";
import { initialMovieState } from "../utils/constants";

export const HomePage = () => {
  const [movieSelected, setMovieSelected] = useState(
    initialMovieState as MovieItem
  );

  const clickHandler = useCallback(
    (movie: MovieItem) => {
      setMovieSelected(movie);
    },
    [mockData.data]
  );

  return (
    <>
      <Header movie={movieSelected} />
      <Filter items={mockData.data} />
      <MovieList
        movies={mockData.data}
        children={MovieCard}
        eventHandler={clickHandler}
      />
      <Footer />
    </>
  );
};
