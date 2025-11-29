import type { GenreDto } from "../dtos/objectsDtos";

export function FilterSidebar({
  genres,
  handleGenreChange,
  selectedGenres,
}: {
  genres: GenreDto[];
  handleGenreChange: (genre: GenreDto, isChecked: boolean) => void;
  selectedGenres: GenreDto[];
}) {
  return (
    <section className="filter-sidebar">
      <h2 className="filter-sidebar-title">Filter by Genre</h2>
      <ul className="filter-sidebar-list">
        {genres.length === 0 ? (
          <li>No genres available.</li>
        ) : (
          genres.map((genre) => (
            <li key={genre.id}>
              <input
                type="checkbox"
                id={`genre-${genre.id}`}
                onChange={(e) => handleGenreChange(genre, e.target.checked)}
                checked={selectedGenres.some(
                  (selectedGenre) => selectedGenre.id === genre.id
                )}
              />
              <label htmlFor={`genre-${genre.id}`}>{genre.name}</label>
              <br />
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
