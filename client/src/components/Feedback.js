import React, { useState } from 'react';

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can include logic to submit feedback to your backend or store it locally
        console.log('Feedback submitted:', { rating, comment });
        // Reset form fields after submission
        setRating(0);
        setComment('');
    };

    return (
        <div>
            <h2>Give Feedback for Purchased Products</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Rating:
                    <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
                        <option value={0}>Select Rating</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </label>
                <br />
                <label>
                    Comment:
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
                </label>
                <br />
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

export default Feedback;
