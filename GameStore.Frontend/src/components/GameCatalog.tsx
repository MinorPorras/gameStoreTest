import { useEffect, useState } from "react";
import type { GenreDto } from "../types/game";
import { FilterSidebar } from "./filterSidebar";

export function GameCatalog() {
  const [genres, setGenres] = useState<GenreDto[]>([]);

  useEffect(() => {
    // Fetch genres for filtering
  }, []);

  useEffect(() => {
    // Filter games based on selected genres
  }, [genres]);

  const handleGenreChange = (genre: GenreDto, isChecked: boolean) => {
    // Handle genre checkbox change
    if (isChecked) {
      setGenres((prevGenres) => [...prevGenres, genre]);
    } else {
      setGenres((prevGenres) => prevGenres.filter((id) => id !== genre));
    }
  };

  return (
    <main>
      <h1>Game List</h1>
      
      <FilterSidebar genres={genres} handleGenreChange={handleGenreChange} />

      <section className="game-list">
        <h2>All Games</h2>
      </section>
      {/* Game list content will go here */}
    </main>
  );
}

export default GameCatalog;
