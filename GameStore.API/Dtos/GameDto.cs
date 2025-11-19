namespace GameStore.API.Dtos;

public record class GameDto(
    int ID, 
    string Title, 
    string Genre, 
    decimal Price,
    DateOnly ReleaseDate);

