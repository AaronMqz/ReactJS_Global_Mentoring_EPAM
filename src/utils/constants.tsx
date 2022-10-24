export const ThemeColor = {
  Primary: "#f64261",
  Secondary: "#232323",
  Input: "#424242",
  Text: "#ffffff",
  TagLine: "#555555",
};

export const ButtonType = {
  Normal: "Normal",
  Custom: "Custom",
};

export const SortByList = [
  { id: "release_date", name: "RELEASE DATE" },
  { id: "title", name: "TITLE" },
];

export const Genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Drama",
  "Family",
  "Fantasy",
  "Romance",
  "Science Fiction",
];

export const initialMovieState = {
  id: 0,
  poster_path: "",
  title: "",
  tagline: "",
  release_date: "",
  vote_count: 0,
  vote_average: 0,
  overview: "",
  budget: 0,
  revenue: 0,
  genres: [],
  runtime: 0,
};
