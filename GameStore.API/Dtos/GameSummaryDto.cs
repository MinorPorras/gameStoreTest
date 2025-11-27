namespace GameStore.API.Dtos;

public record class GameSummaryDto(
    int ID, 
    string Name, 
    string GenreName, 
    decimal Price,
    DateOnly ReleaseDate);

