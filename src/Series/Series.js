import React from "react";
import useFetchData from "../useFetchData";
import './styles.css'
const Series = () => {
    const { data, loading, error } = useFetchData('https://api.tvmaze.com/shows');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Filter out only series (shows with type "Scripted")
    const series = data.filter(show => show.type === 'Scripted');
    return (
        <div className="wrapper">
            {series.map(show => (
                <div key={show.id} className="card">
                    <div className="poster">
                        <img src={show.image?.medium} alt={show.name} />
                    </div>
                    <div className="details">
                        <h1>{show.name}</h1>
                        <h2>{show.premiered} • {show.rating?.average ? `${show.rating.average}/10` : 'N/A'}</h2>
                        <div className="tags">
                            {show.genres.map(genre => (
                                <span key={genre} className="tag">{genre}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Series;