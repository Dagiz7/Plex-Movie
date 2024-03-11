// ShowCard.js

import React, { useState } from 'react';
import CommentPopup from './PopUp/CommentPopup';
import "./styles.css";

function ShowCard({ show }) {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="show-card">
            <div className="image-container">
                {show.image && <img src={show.image.medium} alt={show.name} className="large-image" />}
            </div>
            <div className="content">
                <h2>{show.name}</h2>
                <p> {show.language}</p>
                <p>{show.genres.join(', ')}</p>
                <p>Rating: {show.rating.average}</p>
                <div className="buttons-container">
                    <button className="stream-button">Stream</button>
                    <button className="comments-button" onClick={togglePopup}>Comments</button>
                </div>
            </div>
            {showPopup && <CommentPopup show={show} onClose={togglePopup} />}

        </div>
    );
}

export default ShowCard;
