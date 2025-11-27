using GameStore.API.Endpoints;
using GameStore.API.Data;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("GameStoreDB") 
    ?? throw new InvalidOperationException("Connection string 'GameStoreDB' not found.");

builder.Services.AddNpgsql<GameStoreContext>(connectionString);

builder.Services.AddAutoMapper(act => {}, typeof(Program));

var app = builder.Build();

app.MapGamesEndpoints();
app.MapGenreEndpoints();

app.MapGet("/", () => "Hello World!");

await app.MigrateDB();

app.Run();
