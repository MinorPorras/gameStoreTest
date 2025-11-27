using GameStore.API.Data;
using GameStore.API.Dtos;
using GameStore.API.Extensions;
using GameStore.API.Mapping;
using Microsoft.EntityFrameworkCore;

namespace GameStore.API.Endpoints;

public static class GenreEnpoints
{
    const string GET_GENRE_BY_ID_ROUTE = "/{id}";
    const string GET_GENRE_BY_ID_ROUTE_NAME = "GetGenreById";

    public static RouteGroupBuilder MapGenreEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("genres");

        group.MapGet("/", async (GameStoreContext dbContext) =>
             await dbContext.Genres
                .Select(g => g.ToGenreDto())
                .AsNoTracking()
                .ToListAsync()
        ).WithName("GetAllGenres");

        group.MapGet(GET_GENRE_BY_ID_ROUTE, async (int id, GameStoreContext dbContext) =>
        {
            var genre = await dbContext.Genres.FindAsync(id);
            return genre == null ? Results.NotFound() : Results.Ok(genre.ToGenreDto());
        }).WithName(GET_GENRE_BY_ID_ROUTE_NAME);

        group.MapPost("/", async (GenreDto newGenre, GameStoreContext dbContext) =>
        {
            var genreEntity = newGenre.ToGenreEntity();

            dbContext.Genres.Add(genreEntity);
            await dbContext.SaveChangesAsync();

            return Results.CreatedAtRoute(
                GET_GENRE_BY_ID_ROUTE_NAME,
                new { id = genreEntity.Id },
                genreEntity.ToGenreDto());
        }).WithValidation<GenreDto>();

        group.MapPut(GET_GENRE_BY_ID_ROUTE, async (int id, GenreDto updatedGenre, GameStoreContext dbContext) =>
        {
            var genre = await dbContext.Genres.FindAsync(id);
            if (genre == null) return Results.NotFound();

            dbContext.Entry(genre)
                .CurrentValues
                .SetValues(updatedGenre.ToGenreEntity());
            await dbContext.SaveChangesAsync();

            return Results.NoContent();
        }).WithValidation<GenreDto>();

        group.MapDelete(GET_GENRE_BY_ID_ROUTE, async (int id, GameStoreContext dbContext) =>
        {
            await dbContext.Genres.Where(g => g.Id == id).ExecuteDeleteAsync();
            return Results.NoContent();
        });


        return group;
    }
}
