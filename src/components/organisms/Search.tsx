import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../models/routes.model';
import { type DisneyCharacter } from '../../models/disney.model';
import { getCharacters } from '../../api/disney.api';
import { StatsSummary } from '../molecules/StatsSummary';
import { Button } from '../atoms/Button';
import './Search.css';

export const Search = () => {

    const [stats, setStats] = useState<Record<string, number>>({});

    const [query, setQuery] = useState('');
    const [characters, setCharacters] = useState<DisneyCharacter[]>([]);
    const [selectedChar, setSelectedChar] = useState<DisneyCharacter | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSearch = async (name?: string) => {
        setLoading(true);
        try {
            const data = await getCharacters(name);
            setCharacters(data);

            const counts = data.reduce((acc: Record<string, number>, char: any) => {
                if (char.tvShows && char.tvShows.length > 0) {
                    char.tvShows.forEach((show: string) => {
                        acc[show] = (acc[show] || 0) + 1;
                    });
                }
                return acc;
            }, {});

            setStats(counts);

        } catch (error) {
            console.error("Error fetching Disney characters:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleSearch();
    }, []);

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
                <Button
                    label="Back to Gallery"
                    onClick={() => setSelectedChar(null)}
                    className="back-btn"
                />
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
                <Button
                    label="Search"
                    onClick={() => handleSearch(query)}
                    className="counter"
                />
            </div>

            {!loading && <StatsSummary stats={stats} />}

            <div className="results-grid">
                {loading ? (
                    <p className="loading-text">Loading characters...</p>
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

            <Button
                label="Back to Menu"
                onClick={() => navigate(Routes.HOME)}
                className="back-btn"
            />
        </div>
    );
};