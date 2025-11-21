

using System.ComponentModel.DataAnnotations.Schema;

namespace GameStore.API.Entities;

[Table("Genres")]
public class Genre
{
    public int Id { get; set; }

    public required string Name { get; set; }
}
