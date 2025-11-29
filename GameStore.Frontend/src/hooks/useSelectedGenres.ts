import { useState } from "react";
import type { GenreDto } from "../dtos/objectsDtos";

export function useSelectedGenres() {
  const [selectedGenres, setSelectedGenres] = useState<GenreDto[]>([]);

    const handleGenreChange = (genre: GenreDto, isChecked: boolean) => {
    // Handle genre checkbox change
    if (isChecked) {
      setSelectedGenres((prevGenres) => [...prevGenres, genre]);
    } else {
      setSelectedGenres((prevGenres) => prevGenres.filter((g) => g.id !== genre.id));
    }
  };
  
  return { selectedGenres, handleGenreChange };
}

export default useSelectedGenres;