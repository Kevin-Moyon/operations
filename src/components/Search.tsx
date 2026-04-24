import { useState, useEffect } from 'react';


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

interface SearchProps {
    onBack: () => void;
}

export const Search = ({ onBack }: SearchProps) => {
    const [query, setQuery] = useState('');
    const [characters, setCharacters] = useState<DisneyCharacter[]>([]);
    const [selectedChar, setSelectedChar] = useState<DisneyCharacter | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchCharacters = async (name?: string) => {
        setLoading(true);
        try {
            const url = name
                ? `https://api.disneyapi.dev/character?name=${encodeURIComponent(name)}` : `https://api.disneyapi.dev/character`;
            const response = await fetch(url);
            const res = await response.json();
            const data = Array.isArray(res.data) ? res.data : [res.data];
            setCharacters(data.filter(Boolean));
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchCharacters(); }, []);

    if (selectedChar) {
        return (
            <div className="details-view">
                <div className="flex-container">
                    <img src={selectedChar.imageUrl} alt={selectedChar.name} className="main-img" />
                    <div className="info-panel">
                        <h1>{selectedChar.name}</h1>
                        <p className="id-tag">Character ID: #{selectedChar._id}</p>
                        <hr />
                        <div className="info-block">
                            <h3>Media & Appearances</h3>
                            <p><strong>Films:</strong> {selectedChar.films.join(', ') || 'None'}</p>
                            <p><strong>TV Shows:</strong> {selectedChar.tvShows.join(', ') || 'None'}</p>
                        </div>
                    </div>
                </div>
                <button className="back-btn" onClick={() => setSelectedChar(null)}>
                    Back to Gallery
                </button>
            </div>
        );
    }

    return (
        <div className="search-page">
            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="Search characters..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="counter" onClick={() => fetchCharacters(query)}>
                    Search
                </button>
            </div>

            <div className="results-grid">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    characters.map(char => (
                        <div key={char._id} className="character-card" onClick={() => setSelectedChar(char)}>
                            <img src={char.imageUrl} alt={char.name} />
                            <div className="card-info">
                                <h3>{char.name}</h3>
                                <p>Featured in: {char.films[0] || 'Disney Original'}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <button className="back-btn" onClick={onBack} style={{ marginTop: '20px' }}>
                Back to Menu
            </button>
        </div>
    );
};