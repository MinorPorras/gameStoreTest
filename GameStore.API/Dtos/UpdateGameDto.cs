using System.ComponentModel.DataAnnotations;

namespace GameStore.API.Dtos;

public record class UpdateGameDTO(
    [property: Required(ErrorMessage = "El título es obligatorio.")]
    [property: StringLength(50)]
    string Title,

    [property: Required(ErrorMessage = "El género es obligatorio.")]
    [property: StringLength(20)]
    string Genre,

    [property: Range(0.01, double.MaxValue, ErrorMessage = "El precio debe ser mayor que cero.")]
    decimal? Price, 
    
    [property: Required(ErrorMessage = "La fecha de lanzamiento es obligatoria.")]
    DateOnly? ReleaseDate
);
