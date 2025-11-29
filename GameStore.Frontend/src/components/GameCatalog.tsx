import { FilterSidebar } from "./filterSidebar";
import { GameCard } from "./GameCard";
import useGames from "../hooks/useGames";
import useGenres from "../hooks/useGenres";
import { useSelectedGenres } from "../hooks/useSelectedGenres";

export function GameCatalog() {
  // State variables
  const { genres } = useGenres();
  const { selectedGenres, handleGenreChange } = useSelectedGenres();
  const { games } = useGames({genres: selectedGenres});

  console.log("Games:", games);
  return (
    <main>
      <h1>Game List</h1>

      <FilterSidebar genres={genres} handleGenreChange={handleGenreChange} selectedGenres={selectedGenres} />

      <section className="game-list-section">
        <h2>All Games</h2>
        <div className="game-list-content">
          {games.map((game) => (
            <GameCard key={game.Id} game={game} />
          ))}
        </div>
      </section>
      {/* Game list content will go here */}
    </main>
  );
}

export default GameCatalog;
