// CommentPopup.js

import React, { useState, useEffect, useRef } from 'react';
import "./CommentPopup.css";
function CommentPopup({ show, onClose }) {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [tempSubmittedComments, setTempSubmittedComments] = useState([]);
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const handleSubmit = () => {
        if (name && comment) {
            const newComment = {
                id: show.id,
                name: name,
                comment: comment
            };
            setTempSubmittedComments([...tempSubmittedComments, newComment]);
            setName('');
            setComment('');
        }
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <div className="comment-popup-overlay">
            <div ref={popupRef} className="comment-popup-content">
                <div className="image-container">
                    <img src={show.image.medium} alt={show.name} />
                </div>
                <div className="content">
                    <div className="show-details">
                        <h2>{show.name}</h2>
                        <p>Language: {show.language}</p>
                        <p>Genre: {show.genres.join(', ')}</p>
                        <p>Rating: {show.rating.average}</p>
                        <div dangerouslySetInnerHTML={{ __html: show.summary }} /> {/* Render summary without <p> tags */}
                    </div>
                    <div className="submitted-comments">
                        {tempSubmittedComments.map((submittedComment, index) => (
                            <div key={index} className="comment">
                                <p><strong>{submittedComment.name}:</strong> {submittedComment.comment}</p>
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <textarea
                        placeholder="Your Comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <button onClick={handleSubmit}>Submit</button>
                    <button className="close-button" onClick={handleClose} />
                </div>
            </div>
        </div>
    );
}

export default CommentPopup;
