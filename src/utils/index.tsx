export const getMoviesGenres = (data: Array<MovieItem>) => {
  const genres = data.reduce<string[]>(
    (prev, acc) => prev.concat(acc.genres),
    []
  );

  return [...new Set(genres.sort())];
};

export const getYear = (release_date: string) => {
  try {
    return new Date(release_date).getFullYear();
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    console.log(message);
  }
};
