import type { GenreDto } from "../types/game";

export function FilterSidebar({
  genres,
  handleGenreChange,
}: {
  genres: GenreDto[];
  handleGenreChange: (genre: GenreDto, isChecked: boolean) => void;
}) {
  return (
    <section className="filter-sidebar">
      <h2 className="filter-sidebar-title">Filter by Genre</h2>
      <ul className="filter-sidebar-list">
        {genres.length === 0 ? (
          <li>No genres available.</li>
        ) : (
          genres.map((genre: { Id: number; Name: string }) => (
            <>
              <input
                type="checkbox"
                key={genre.Id}
                id={`genre-${genre.Id}`}
                onChange={(e) => handleGenreChange(genre, e.target.checked)}
                checked={genres.includes(genre)}
              />
              <label htmlFor={`genre-${genre.Id}`}>{genre.Name}</label>
              <br />
            </>
          ))
        )}
      </ul>
    </section>
  );
}
