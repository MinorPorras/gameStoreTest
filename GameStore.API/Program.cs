using GameStore.API.Endpoints;
using GameStore.API.Data;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("GameStoreDB") 
    ?? throw new InvalidOperationException("Connection string 'GameStoreDB' not found.");

builder.Services.AddNpgsql<GameStoreContext>(connectionString);

var app = builder.Build();

app.MapGamesEndpoints();

app.MapGet("/", () => "Hello World!");

app.MigrateDB();

app.Run();
