import { useState } from "react";
import type { GenreDto } from "../types/game";

export function useSelectedGenres() {
  const [selectedGenres, setSelectedGenres] = useState<GenreDto[]>([]);

    const handleGenreChange = (genre: GenreDto, isChecked: boolean) => {
    // Handle genre checkbox change
    if (isChecked) {
      setSelectedGenres((prevGenres) => [...prevGenres, genre]);
    } else {
      setSelectedGenres((prevGenres) => prevGenres.filter((g) => g.Id !== genre.Id));
    }
  };
  
  return { selectedGenres, handleGenreChange };
}

export default useSelectedGenres;