using GameStore.API.Data;
using GameStore.API.Dtos;
using GameStore.API.Entities;
using GameStore.API.Extensions;

namespace GameStore.API.Endpoints;

public static class GamesEndpoints
{
    const string GET_GAME_BY_ID_ROUTE = "/{id}";
    const string GET_GAME_BY_ID_ROUTE_NAME = "GetGameById";

    private static readonly List<GameDto> games = [
        new(1, "The Legend of Zelda: Breath of the Wild", "Action-Adventure", 59.99m, new DateOnly(2017, 3, 3)),
        new(2, "God of War", "Action", 49.99m, new DateOnly(2018, 4, 20)),
        new(3, "Red Dead Redemption 2", "Action-Adventure", 39.99m, new DateOnly(2018, 10, 26)),
        new(4, "Minecraft", "Sandbox", 26.95m, new DateOnly(2011, 11, 18)),
        new(5, "The Witcher 3: Wild Hunt", "RPG", 29.99m, new DateOnly(2015, 5, 19))
    ];

    public static RouteGroupBuilder MapGamesEndpoints(this WebApplication app)
    {

        var group = app.MapGroup("games");
        // GET /games
        group.MapGet("/", () => games);

        // GET /games/{id}
        // Se recibe el ID del juego como parámetro de ruta
        group.MapGet(GET_GAME_BY_ID_ROUTE, (int id) =>
        {
            GameDto? game = games.FirstOrDefault(g => g.ID == id);
            return game is not null ? Results.Ok(game) : Results.NotFound();
        }).WithName(GET_GAME_BY_ID_ROUTE_NAME);

        // POST /games
        group.MapPost("/", (CreateGameDTO newGame, GameStoreContext dbContext) =>
        {
            Game game = new()
            {
                Name = newGame.Title,
                GenreId = dbContext.Genres.FirstOrDefault(g => g.Name == newGame.Genre)?.Id ?? 0,
                Price = newGame.Price ?? 0,
                ReleaseDate = newGame.ReleaseDate ?? default
            };

            dbContext.Games.Add(game);
            dbContext.SaveChanges();

            return Results.CreatedAtRoute(GET_GAME_BY_ID_ROUTE_NAME, new { id = game.Id }, game);
        }).WithValidation<CreateGameDTO>();

        // PUT /games/{id}
        group.MapPut(GET_GAME_BY_ID_ROUTE, (int id, UpdateGameDTO updatedGame) =>
        {
            int index = games.FindIndex(g => g.ID == id);
            if (index == -1)
            {
                return Results.NotFound();
            }
            games[index] = new GameDto(
                id,
                updatedGame.Title,
                updatedGame.Genre,
                updatedGame.Price ?? 0,
                updatedGame.ReleaseDate ?? default
            );
            return Results.NoContent();
        }).WithValidation<UpdateGameDTO>();

        // DELETE /games/{id}
        group.MapDelete(GET_GAME_BY_ID_ROUTE, (int id) =>
        {
            games.RemoveAll(g => g.ID == id);
            return Results.NoContent();
        });

        return group;
    }
}
