using GameStore.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace GameStore.API.Data;

public class GameStoreContext(DbContextOptions<GameStoreContext> options)
: DbContext(options)
{
    public DbSet<Game> Games => Set<Game>();
    public DbSet<Genre> Genres => Set<Genre>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Genre>().HasData(
            [
                new Genre { Id = 1, Name = "Action" },
                new Genre { Id = 2, Name = "Adventure" },
                new Genre { Id = 3, Name = "RPG" },
                new Genre { Id = 4, Name = "Simulation" },
                new Genre { Id = 5, Name = "Sports" }
            ]
        );

        modelBuilder.Entity<Game>().HasData(
            [
                new Game { Id = 1, Name = "The Legend of Zelda: Breath of the Wild", GenreId = 2, Price = 59.99M, ReleaseDate = new DateOnly(2017, 3, 3) },
                new Game { Id = 2, Name = "God of War", GenreId = 1, Price = 59.99M, ReleaseDate = new DateOnly(2018, 4, 20) },
                new Game { Id = 3, Name = "The Witcher 3: Wild Hunt", GenreId = 3, Price = 39.99M, ReleaseDate = new DateOnly(2015, 5, 19) },
                new Game { Id = 4, Name = "Microsoft Flight Simulator", GenreId = 4, Price = 49.99M, ReleaseDate = new DateOnly(2020, 8, 18) },
                new Game { Id = 5, Name = "FIFA 22", GenreId = 5, Price = 59.99M, ReleaseDate = new DateOnly(2021, 10, 1) }
            ]
        );
    }
}
