using AutoMapper;
using GameStore.API.Dtos;
using GameStore.API.Entities;

namespace GameStore.API.Mapping;

public class GameProfile : Profile
{
    public GameProfile()
    {
        // CreateMap<Source, Destination>();
        CreateMap<CreateGameDTO, Game>();

        CreateMap<Game, GameSummaryDto>()
            .ForMember(
                dest => dest.GenreName,
                opt => opt.MapFrom(src => src.Genre != null ? src.Genre.Name : "Unknown")
            );

        CreateMap<Game, GameDetailsDto>().ForMember(
            dest => dest.GenreID,
            opt => opt.MapFrom(src => src.Genre != null ? src.Genre.Id : 0)
        );
    }
}
