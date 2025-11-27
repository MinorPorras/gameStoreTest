export interface CreateGameDto {
    Name: string;
    GenreId: number;
    Price: number;
    ReleaseDate: Date;
}

export interface GameDetailsDto {
    Id: number;
    Name: string;
    GenreId: number;
    Price: number;
    ReleaseDate: Date;
}

export interface GameSummaryDto {
    Id: number;
    Name: string;
    GenreName: string;
    Price: number;
    ReleaseDate: Date;
}

export interface UpdateGameDto {
    Name: string;
    GenreId: number;
    Price: number;
    ReleaseDate: Date;
}

export interface GenreDto{
    Id: number;
    Name: string;
}