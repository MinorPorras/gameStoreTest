using System.Reflection.Metadata.Ecma335;
using AutoMapper;
using GameStore.API.Data;
using GameStore.API.Dtos;
using GameStore.API.Entities;
using GameStore.API.Extensions;
using GameStore.API.Mapping;
using Microsoft.EntityFrameworkCore;

namespace GameStore.API.Endpoints;

public static class GamesEndpoints
{
    const string GET_GAME_BY_ID_ROUTE = "/{id}";
    const string GET_GAME_BY_GENRE_ID_ROUTE = "/genre/{genreId}";
    const string GET_GAME_BY_ID_ROUTE_NAME = "GetGameById";

    public static RouteGroupBuilder MapGamesEndpoints(this WebApplication app)
    {

        var group = app.MapGroup("games");
        // GET /games
        group.MapGet("/", async (GameStoreContext dbContext) =>
            await dbContext.Games
                .Include(g => g.Genre)
                .OrderBy(g => g.Name)
                .Select(g => g.ToGameSummaryDto())
                .AsNoTracking()
                .ToListAsync()
        ).WithName("GetAllGames");

        // GET /games/{id}
        // Se recibe el ID del juego como parámetro de ruta
        group.MapGet(GET_GAME_BY_ID_ROUTE, async (int id, GameStoreContext dbContext) =>
        {
            Game? game = await dbContext.Games.FindAsync(id);
            return game == null ? Results.NotFound() : Results.Ok(game?.ToGameDetailsDto());
        }).WithName(GET_GAME_BY_ID_ROUTE_NAME);

        // GET /games/genre/{genreId}
        group.MapGet(GET_GAME_BY_GENRE_ID_ROUTE, async (int genreId, GameStoreContext dbContext) =>
        {
            var games = await dbContext.Games
                .Include(g => g.Genre)
                .Where(g => g.GenreId == genreId)
                .OrderBy(g => g.Name)
                .Select(g => g.ToGameSummaryDto())
                .AsNoTracking()
                .ToListAsync();

            return Results.Ok(games);
        }).WithName("GetGamesByGenreId");

        // POST /games
/*      group.MapPost("/", (CreateGameDTO newGame, GameStoreContext dbContext) =>
        {
            Game game = newGame.ToEntity();

            dbContext.Games.Add(game);
            dbContext.SaveChanges();

            return Results.CreatedAtRoute(GET_GAME_BY_ID_ROUTE_NAME, new { id = game.Id }, game.ToGameDetailsDto());
        }).WithValidation<CreateGameDTO>(); */

        // POST /games
        group.MapPost("/", async (CreateGameDTO newGame, GameStoreContext dbContext, IMapper mapper) =>
        {
            Game game = mapper.Map<Game>(newGame);

            dbContext.Games.Add(game);
            await dbContext.SaveChangesAsync();

            return Results.CreatedAtRoute(
                GET_GAME_BY_ID_ROUTE_NAME, 
                new { id = game.Id }, 
                mapper.Map<GameDetailsDto>(game));
        }).WithValidation<CreateGameDTO>();

        // PUT /games/{id}
        group.MapPut(GET_GAME_BY_ID_ROUTE, async (int id, UpdateGameDTO updatedGame, GameStoreContext dbContext) =>
        {
            Game? existingGame = await dbContext.Games.FindAsync(id);
            if (existingGame == null) return Results.NotFound();

            dbContext.Entry(existingGame)
                .CurrentValues
                .SetValues(updatedGame.ToEntity(id));

            await dbContext.SaveChangesAsync();
            return Results.NoContent();
        }).WithValidation<UpdateGameDTO>();

        // DELETE /games/{id}
        group.MapDelete(GET_GAME_BY_ID_ROUTE, async (int id, GameStoreContext dbContext) =>
        {
            await dbContext.Games.Where(g => g.Id == id).ExecuteDeleteAsync();
            return Results.NoContent();
        });

        return group;
    }
}
