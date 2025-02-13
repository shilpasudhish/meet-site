import React, {useState} from "react";
import './../App.css';

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    const { summary, start, location, description, created } = event;
    const { dateTime } = start;
       
    return (
        <li key={event.id} role="listitem" className="event">
        <h2 id="summary">{summary}</h2>
        <p id="when-created">{created}</p>
        <p id="when-event">{dateTime}</p>
        <p id="event-location">{location}</p>
        <button className="details-btn" onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "Hide Details" : "Show Details"}
        </button>
        {showDetails && <p id="event-description" data-testid="event-description">{description}</p>}
        </li>
    );
}
export default Event;