import React, { useState } from "react";
const NumberOfEvents = ({ numberOfEvents, setNumberOfEvents }) => {
    return (
        <div id="number-of-events">
            <input
                aria-label="Number of Events"
                type="number"
                data-testid="number-of-events-input"
                id="number-of-events-input"
                value={numberOfEvents}
                role="textbox"
                onChange={(e) => setNumberOfEvents(e.target.value)}
            />
        </div>
    );
}
export default NumberOfEvents;