import { GENRES_ENDPOINT } from "../constants";
import type { GenreDto } from "../types/objectsDtos";

export async function getGenres(): Promise<GenreDto[]> {
  const response = await fetch(GENRES_ENDPOINT);
  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }
  const genres = await response.json();
  return genres;
}

export default {
  getGenres,
};