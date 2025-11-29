
import type { GameSummaryDto } from "../types/game";

export function GameCard({ game }: { game: GameSummaryDto }) {
  return (
    <div>
        <h3>{game.Name}</h3>
        <p>{game.GenreName}</p>
        <p>${game.Price}</p>
        <p>Released on {new Date(game.ReleaseDate).toString()}</p>
    </div>
  );
}

export default GameCard;