import { FilterSidebar } from "./filterSidebar";
import { GameCard } from "./GameCard";
import useGames from "../hooks/useGames";
import useGenres from "../hooks/useGenres";
import { useSelectedGenres } from "../hooks/useSelectedGenres";

export function GameCatalog() {
  // State variables
  const { genres } = useGenres();
  const { selectedGenres, handleGenreChange } = useSelectedGenres();
  const { games } = useGames({ selectedGenres: selectedGenres });

  console.log("games:", games);

  return (
    <main>
      <h1>Game List</h1>

      <FilterSidebar
        genres={genres}
        handleGenreChange={handleGenreChange}
        selectedGenres={selectedGenres}
      />

      <section className="game-list-section">
        <h2>
          {selectedGenres.length > 0 ? `Games in Selected Genres` : "All Games"}
        </h2>
        <div className="game-list-content">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default GameCatalog;
