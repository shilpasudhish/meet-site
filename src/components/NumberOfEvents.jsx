import React, { useState } from "react";
const NumberOfEvents = ({ numberOfEvents, setNumberOfEvents, setErrorAlert  }) => {
    const [error, setError] = useState('');

    const handleInputChanged = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value < 1 || value > 32) {
            setError('Select a number between 1 and 32');
            setErrorAlert('Select a number between 1 and 32');
        } else {
            setError('');
            setErrorAlert('');
            setNumberOfEvents(value);
        }
    };

    return (
        <div id="number-of-events">
            <input
                aria-label="Number of Events"
                type="number"
                data-testid="number-of-events-input"
                id="number-of-events-input"
                value={numberOfEvents || ''}
                role="textbox"
                onChange={(e) => handleInputChanged(e)}
            />
            {error && <div className="error-alert">{error}</div>}
        </div>
    );
}
export default NumberOfEvents;