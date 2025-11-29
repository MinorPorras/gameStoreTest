import useGenres from "../hooks/useGenres";
import { GameList } from "./GameList";

export function Home() {
  // Home page content
  const {genres} = useGenres();

  return (
    <main>
      <h1>Welcome to Game Store!</h1>
      <p>Discover and explore a wide variety of games across different genres.</p>
      <p>See some of the most popular games below and our different genres.</p>

      {/* Additional home page content can go here */}
      {genres.map((genre) => (
        <GameList key={genre.id} genre={genre} />
      ))}
    </main>
  );
}

export default Home;
