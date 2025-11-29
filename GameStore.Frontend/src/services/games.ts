import { GAMES_ENDPOINT } from "../constants";
import type { GameSummaryDto } from "../types/game";

export async function GetGamesByGenreIds(
  genreIds: number[]
): Promise<GameSummaryDto[]> {
  try {
    const queryParams =
      genreIds.length > 0
        ? `?${genreIds.map((id) => `genreIds=${id}`).join("&")}`
        : "";
    const response = await fetch(`${GAMES_ENDPOINT}${queryParams}`);
    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching games by genre IDs:", error);
    throw error;
  }
}

export default {
  GetGamesByGenreIds,
};
