using AutoMapper;
using GameStore.API.Dtos;
using GameStore.API.Entities;

namespace GameStore.API.Mapping;

public class GameProfile : Profile
{
    public GameProfile()
    {
        // CreateMap<Source, Destination>();
        CreateMap<Game, CreateGameDTO>();

        CreateMap<CreateGameDTO, Game>();
    }
}
