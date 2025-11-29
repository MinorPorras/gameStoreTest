import useGames from "../hooks/useGames";
import type { GenreDto } from "../dtos/objectsDtos";

export function GameList({ genre }: { genre: GenreDto}) {

  const { games } = useGames({ selectedGenres: genre ? [genre] : [] });
  
  return (
    <section>
      <h2>{genre?.name || "All Games"}</h2>
      {
        /* Game list content will go here */
        games?.length === 0 ? (
          <p>No games available in this genre.</p>
        ) : (
          <ul>
            {games?.map((game) => (
              <li key={game.id}>
                {game.name} - {game.genreName} - ${game.price} - Released on{" "}
                {new Date(game.releaseDate).toDateString()}
              </li>
            ))}
          </ul>
        )
      }
    </section>
  );
}
