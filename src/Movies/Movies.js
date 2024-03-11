import React from 'react';
import ShowList from './ShowList';
import useFetch from '../useFetchData';

const Movies = () => {
    const { data: shows, isPending, error } = useFetch('https://api.tvmaze.com/shows');


    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {shows && <ShowList shows={shows} title="All Blogs!" />}
        </div>
    );
}

export default Movies;