import React, { useEffect } from 'react';
import MovieList from './MovieList.styled';
import { getMovies } from '../../redux/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

type MovieListProps = {
  children: React.ElementType;
  eventHandler: (params: MovieItem) => void;
};

const MovieListComponent = ({
  children: Children,
  eventHandler,
}: MovieListProps) => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <MovieList.Container>
        {data[0].id !== 0 &&
          data.map((movie: MovieItem) => {
            return (
              <Children
                key={movie.id}
                movie={movie}
                handleClick={eventHandler}
              />
            );
          })}
      </MovieList.Container>
    </>
  );
};

export default React.memo(MovieListComponent);
