import type { FilterSidebarProps } from "../types/types";

export function FilterSidebar({
  genres,
  handleGenreChange,
  selectedGenres,
  sidebarOpen,
  sidebarRef
}: FilterSidebarProps) {
  return (
    <section
      className={`filter-sidebar-container ${sidebarOpen ? "filter-sidebar-open" : "filter-sidebar-close"}`}
      ref={sidebarRef}
    >
      <h2 className="filter-sidebar-title">Filter by Genre</h2>
      <ul className="filter-sidebar-list">
        {genres.length === 0 ? (
          <li className="filter-sidebar-item">No genres available.</li>
        ) : (
          genres.map((genre) => (
            <li key={genre.id} className="filter-sidebar-item">
              <input
                type="checkbox"
                id={`genre-${genre.id}`}
                onChange={(e) => handleGenreChange(genre, e.target.checked)}
                checked={selectedGenres.some(
                  (selectedGenre) => selectedGenre.id === genre.id
                )}
                className="filter-sidebar-checkbox"
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
