export {};
declare global {
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
}
