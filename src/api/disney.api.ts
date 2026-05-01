
import type { DisneyCharacter } from "../models/disney.model";

const BASE_URL = 'https://api.disneyapi.dev/character';


interface DisneyResponse {
    data: DisneyCharacter | DisneyCharacter[];
    info: {
        count: number;
        totalPages: number;
        nextPage?: string;
    };
}

export const getCharacters = async (name?: string): Promise<DisneyCharacter[]> => {
    const url = name
        ? `${BASE_URL}?name=${encodeURIComponent(name)}`
        : BASE_URL;

    const response = await fetch(url);
    const res: DisneyResponse = await response.json();
    const data = Array.isArray(res.data) ? res.data : [res.data];

    return data.filter(Boolean);
};