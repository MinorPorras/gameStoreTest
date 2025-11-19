using GameStore.API.Dtos;
using GameStore.API.Endpoints;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.mapGamesEndpoints();

app.MapGet("/", () => "Hello World!");

app.Run();
