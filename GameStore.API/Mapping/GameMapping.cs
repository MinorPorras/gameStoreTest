
using GameStore.API.Data;
using GameStore.API.Dtos;
using GameStore.API.Entities;

namespace GameStore.API.Mapping;

public static class GameMapping
{
    public static Game ToEntity(this CreateGameDTO dto)
    {
        return new Game()
        {
            Name = dto.Name,
            GenreId = dto.GenreId,
            Price = dto.Price ?? decimal.MinValue,
            ReleaseDate = dto.ReleaseDate ?? new DateOnly()
        };
    }
    
    public static GameDto ToDto(this Game game)
    {
        return new GameDto(
            game.Id,
            game.Name,
            game.Genre?.Name ?? "Unknown",
            game.Price,
            game.ReleaseDate
        );
    }
}
