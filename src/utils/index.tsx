export const getMoviesGenres = (data: Array<MovieItem>) => {
  const genres = data.reduce<string[]>(
    (prev, acc) => prev.concat(acc.genres),
    []
  );

  return [...new Set(genres.sort())];
};
