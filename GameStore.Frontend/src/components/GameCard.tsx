import type { GameSummaryDto } from "../types/objectsDtos";

export function GameCard({ game }: { game: GameSummaryDto }) {
  return (
    <div className="gameCard-container">
      <h3 className="gameCard-name">{game.name}</h3>
      <p>{game.genreName}</p>
      <p className="gameCard-price-text">{game.price === 0 ? "Gratis": `$${game.price}`}</p>
      <p>Released on {new Date(game.releaseDate).toISOString().split("T")[0].replace(/-/g, "/")}</p>
    </div>
  );
}

export default GameCard;
