import type { GenreDto } from "./objectsDtos";

export interface FilterSidebarProps {
  genres: GenreDto[]; // Ejemplo de tipo, ajústalo según tu tipo real de género
  handleGenreChange: (genre: GenreDto, isChecked: boolean) => void;
  selectedGenres: GenreDto[];
  sidebarOpen: boolean;
  // La referencia es de solo lectura y apunta a un HTMLDivElement
  sidebarRef: DomElementRef<HTMLDivElement>;
}

export type DomElementRef<T extends HTMLElement = HTMLElement> = React.RefObject<T | null>;

export interface useSidebarOpenProps {
  initialState: boolean;
  catalogRef: DomElementRef<HTMLElement>;
  sidebarRef: DomElementRef<HTMLDivElement>;
}