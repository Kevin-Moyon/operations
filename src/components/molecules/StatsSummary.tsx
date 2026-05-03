import React from 'react';

interface StatsSummaryProps {
    stats: Record<string, number>;
    title?: string;
}

export const StatsSummary: React.FC<StatsSummaryProps> = ({
    stats,
    title = "Summary of Appearances"
}) => {
    if (Object.keys(stats).length === 0) return null;

    const totalShows = Object.keys(stats).length;
    const topShows = Object.entries(stats)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    return (
        <div className="stats-summary" style={{
            margin: '20px 0',
            padding: '15px',
            backgroundColor: 'var(--accent-bg)',
            borderRadius: '8px',
            textAlign: 'center',
            color: 'white'
        }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{title}</h2>
            <p>These characters appear in <strong>{totalShows}</strong> programas de TV.</p>

            <div style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginTop: '10px'
            }}>
                {topShows.map(([show, count]) => (
                    <span key={show} style={{
                        padding: '5px 12px',
                        background: '#513a66',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        border: 'var(--accent-border)',
                    }}>
                        {show}: <strong>{count}</strong>
                    </span>
                ))}
            </div>
        </div>
    );
};