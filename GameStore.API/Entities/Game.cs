
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GameStore.API.Entities;

public class Game
{
    public int Id { get; set; }

    public required string Name { get; set; }

    public required int GenreId { get; set; }

    public Genre? Genre { get; set; }

    public decimal Price { get; set; }

    public DateOnly ReleaseDate { get; set; }

}
