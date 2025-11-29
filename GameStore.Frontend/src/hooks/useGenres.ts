import { useEffect, useState } from "react";
import type { GenreDto } from "../dtos/objectsDtos";
import { getGenres } from "../services/genres";

export function useGenres() {
  // Hook implementation
  const [genres, setGenres] = useState<GenreDto[]>([]);

    useEffect(() => {
      // Fetch genres for filtering
      getGenres().then((fetchedGenres) => {
        setGenres(fetchedGenres);
      });
    }, []);
  return { genres, setGenres };
}

export default useGenres;