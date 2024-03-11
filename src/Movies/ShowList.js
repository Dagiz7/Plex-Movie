// ShowList.js

import React from 'react';
import useFetchData from '../useFetchData';
import ShowCard from './ShowCard';
import './styles.css';

function ShowList() {
    const { data: shows, loading, error } = useFetchData('https://api.tvmaze.com/shows');

    if (loading) {
        return (
            <div className="loading">
                <div className="spinner"></div>
            </div>
        );
    }

    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="show-list-container">
            <div className="show-list">
                {shows.map(show => (
                    <div key={show.id} className="show-list-item">
                        <ShowCard show={show} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShowList;
