import React from "react";
import MovieList from "./MovieList.styled";

type MovieListProps = {
  movies: Array<MovieItem>;
  children: React.ElementType;
  eventHandler: (params: MovieItem) => void;
};

const MovieListComponent = ({
  movies,
  children: Children,
  eventHandler,
}: MovieListProps) => {
  return (
    <>
      <MovieList.Container>
        {movies.map((movie: MovieItem) => {
          return (
            <Children key={movie.id} movie={movie} handleClick={eventHandler} />
          );
        })}
      </MovieList.Container>
    </>
  );
};

export default React.memo(MovieListComponent);
