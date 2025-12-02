import { FilterSidebar } from "./filterSidebar";
import { GameCard } from "./GameCard";
import useGames from "../hooks/useGames";
import useGenres from "../hooks/useGenres";
import { useSelectedGenres } from "../hooks/useSelectedGenres";
import { useSidebarOpen } from "../hooks/useSidebarOpen";
import { useRef } from "react";

export function GameCatalog() {
  // State variables
  const { genres } = useGenres();
  const { selectedGenres, handleGenreChange } = useSelectedGenres();
  const { games } = useGames({ selectedGenres: selectedGenres });
  const sidebarRef = useRef<HTMLDivElement>(null);
  const catalogRef = useRef<HTMLElement>(null);
  const { sidebarOpen, toggleSidebar } = useSidebarOpen({
    initialState: true,
    sidebarRef: sidebarRef,
    catalogRef: catalogRef,
  });

  return (
    <main className="game-catalog-container" ref={catalogRef}>
      <h1 className="game-catalog-title">Game Catalog</h1>

      <FilterSidebar
        genres={genres}
        handleGenreChange={handleGenreChange}
        selectedGenres={selectedGenres}
        sidebarOpen={sidebarOpen}
        sidebarRef={sidebarRef}
      />

      <section className="game-list-section">
        <header className="game-list-header">
          <button className="filter-sidebar-toggle" onClick={toggleSidebar}>
            {sidebarOpen ? "Hide Filters" : "Show Filters"}
          </button>
          <h2>
            {selectedGenres.length > 0
              ? `Games in Selected Genres`
              : "All Games"}
          </h2>
        </header>
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
