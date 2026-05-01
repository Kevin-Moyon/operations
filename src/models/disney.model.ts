export interface DisneyCharacter {
    _id: number;
    name: string;
    imageUrl?: string;
    films: string[];
    shortFilms: string[];
    tvShows: string[];
    videoGames: string[];
    allies: string[];
    enemies: string[];
    parkAttractions: string[];
}

export interface DisneyApiResponse {
    data: DisneyCharacter | DisneyCharacter[];
    count: number;
    totalPages: number;
    nextPage?: string;
}