import React from 'react';
import './StatsSummary.css';

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
        <div className="stats-summary-container">
            <h2 className="stats-summary-title">{title}</h2>
            <p>These characters appear in <strong>{totalShows}</strong> TV programs.</p>

            <div className="stats-badges-wrapper">
                {topShows.map(([show, count]) => (
                    <span key={show} className="stats-badge">
                        {show}: <strong>{count}</strong>
                    </span>
                ))}
            </div>
        </div>
    );
};