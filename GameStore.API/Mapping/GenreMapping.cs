
using GameStore.API.Dtos;
using GameStore.API.Entities;

namespace GameStore.API.Mapping;

public static class GenreMapping
{
    public static Genre ToGenreEntity(this GenreDto dto)
    {
        return new Genre
        {
            Id = dto.Id,
            Name = dto.Name
        };
    }

    public static GenreDto ToGenreDto(this Genre entity)
    {
        return new GenreDto(
            entity.Id,
            entity.Name
        );
    }
}
