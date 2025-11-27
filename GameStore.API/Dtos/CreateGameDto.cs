using System.ComponentModel.DataAnnotations;

namespace GameStore.API.Dtos;

public record class CreateGameDTO(
    [property: Required(ErrorMessage = "El  nombre del juego es obligatorio.")]
    [property: StringLength(80, ErrorMessage = "El  nombre del juego no puede exceder los 80 caracteres.")]
    string Name,

    [property: Required(ErrorMessage = "El id género es obligatorio.")]
    [property: Range(1, int.MaxValue, ErrorMessage = "El id del género debe ser un número positivo.")]
    int GenreId,

    [property: Range(0.01, double.MaxValue, ErrorMessage = "El precio debe ser mayor que cero.")]
    decimal? Price, 
    
    [property: Required(ErrorMessage = "La fecha de lanzamiento es obligatoria.")]
    DateOnly? ReleaseDate
);