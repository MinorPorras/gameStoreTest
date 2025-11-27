using System.ComponentModel.DataAnnotations;

namespace GameStore.API.Dtos;

public record class UpdateGameDTO(
    [property: Required(ErrorMessage = "El nombre del juego es obligatorio.")]
    [property: StringLength(50)]
    string Name,

    [property: Required(ErrorMessage = "El género es obligatorio.")]
    [property: Range(1, int.MaxValue, ErrorMessage = "El id del género debe ser un número positivo.")]
    int GenreId,

    [property: Range(0.01, double.MaxValue, ErrorMessage = "El precio debe ser mayor que cero.")]
    decimal? Price, 
    
    [property: Required(ErrorMessage = "La fecha de lanzamiento es obligatoria.")]
    DateOnly? ReleaseDate
);
