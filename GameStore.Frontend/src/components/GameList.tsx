import { useEffect } from "react";
import type { GameSummaryDto } from "../types/game";

export function GameList({ genreId }: { genreId?: number }) {
  const genreName = "Genre name"; // Placeholder for genre name based on genreId

  const games: GameSummaryDto[] = []; // Placeholder for fetched games

    useEffect(() => {
    // Fetch games based on genreId if provided
  }, [genreId]);

  
  return (
    <section>
      <h2>{genreName}</h2>
      {
        /* Game list content will go here */
        games.length === 0 ? (
          <p>No games available in this genre.</p>
        ) : (
          <ul>
            {games.map((game) => (
              <li key={game.Id}>
                {game.Name} - {game.GenreName} - ${game.Price} - Released on{" "}
                {game.ReleaseDate.toDateString()}
              </li>
            ))}
          </ul>
        )
      }
    </section>
  );
}
