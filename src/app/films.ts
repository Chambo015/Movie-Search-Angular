export interface getSearchFilms {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface Search {
  title: string;
  year: string;
}

export interface getShortInfo extends getSearchFilms {
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Ratings: Record<string, string>[];
  Country: string;
}
