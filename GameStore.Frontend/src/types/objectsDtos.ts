export interface CreateGameDto {
    name: string;
    genreId: number;
    price: number;
    releaseDate: Date;
}

export interface GameDetailsDto {
    id: number;
    name: string;
    genreId: number;
    price: number;
    releaseDate: Date;
}

export interface GameSummaryDto {
    id: number;
    name: string;
    genreName: string;
    price: number;
    releaseDate: Date;
}

export interface UpdateGameDto {
    name: string;
    genreId: number;
    price: number;
    releaseDate: Date;
}

export interface GenreDto{
    id: number;
    name: string;
}