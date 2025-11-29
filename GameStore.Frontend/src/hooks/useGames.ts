import { useEffect, useState } from "react";
import type { GameSummaryDto, GenreDto } from "../types/game";
import { GetGamesByGenreIds } from "../services/games";

export function useGames({genres}: {genres: GenreDto[]}) {
  // Hook implementation
    const [games, setGames] = useState([] as GameSummaryDto[]);
  
      useEffect(() => {
        // Fetch games based on selected genres
        GetGamesByGenreIds(genres.map((genre) => genre.id)).then((fetchedGames) => {
          setGames(fetchedGames);
        });
      }, [genres]);
    return { games, setGames };
}

export default useGames;