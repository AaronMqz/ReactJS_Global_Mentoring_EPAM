type MovieItem = {
  id: number;
  poster_path: string;
  title: string;
  tagline: string;
  release_date: string;
  vote_count: number;
  vote_average: number;
  overview: string;
  budget: number;
  revenue: number;
  genres: Array<string>;
  runtime: number;
};

export const getMoviesGenres = (data: Array<MovieItem>) => {
  const genres = data.reduce<string[]>(
    (prev, acc) => prev.concat(acc.genres),
    []
  );

  return [...new Set(genres.sort())];
};
