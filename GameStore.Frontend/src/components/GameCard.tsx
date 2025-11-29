import type { GameSummaryDto } from "../dtos/objectsDtos";

export function GameCard({ game }: { game: GameSummaryDto }) {
  return (
    <div>
      <h3>{game.name}</h3>
      <p>{game.genreName}</p>
      <p>${game.price}</p>
      <p>Released on {new Date(game.releaseDate).toISOString().split("T")[0].replace(/-/g, "/")}</p>
    </div>
  );
}

export default GameCard;
