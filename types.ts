export interface SearchData {
  Title: string;
  Year: string;
  imdbID: string;
  Type?: string;
  Poster?: string | null | undefined;
}

export interface FavType extends SearchData {
  comments?: string;
  rating?: number;
}


// Title, Year, imdbID, Poster