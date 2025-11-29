import { useEffect, useState } from "react";
import type { GameSummaryDto, GenreDto } from "../dtos/objectsDtos";
import { GetGamesByGenreIds } from "../services/games";

export function useGames({ selectedGenres }: { selectedGenres: GenreDto[] }) {
  // Hook implementation
  const [games, setGames] = useState([] as GameSummaryDto[]);

  console.log("Selected Genres in useGames:", selectedGenres);
  useEffect(() => {
    // Fetch games based on selected genres
    GetGamesByGenreIds(selectedGenres.map((genre) => genre.id)).then(
      (fetchedGames) => {
        setGames(fetchedGames);
      }
    );
  }, [selectedGenres]);
  return { games, setGames };
}

export default useGames;
