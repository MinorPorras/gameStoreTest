
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

    public static Game ToEntity(this UpdateGameDTO dto, int id)
    {
        return new Game()
        {
            Id = id,
            Name = dto.Name,
            GenreId = dto.GenreId,
            Price = dto.Price ?? decimal.MinValue,
            ReleaseDate = dto.ReleaseDate ?? new DateOnly()
        };
    }
    
    public static GameSummaryDto ToGameSummaryDto(this Game game)
    {
        return new GameSummaryDto(
            game.Id,
            game.Name,
            game.Genre?.Name ?? "Unknown",
            game.Price,
            game.ReleaseDate
        );
    }

    public static GameDetailsDto ToGameDetailsDto(this Game game)
    {
        return new GameDetailsDto(
            game.Id,
            game.Name,
            game.GenreId,
            game.Price,
            game.ReleaseDate
        );
    }
}
