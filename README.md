# Lets Meet App


### App Key Features:
1. Filter Events by City.
USER STORY:
- AS a user,
- I should be able to filter events by city
- SO that I can see a list of events taking place in that city.

> Scenario 1
When user hasn’t searched for a specific city, show upcoming events from all cities.

- GIVEN user hasn’t searched for any city;
- WHEN the user opens the app;
- THEN the user should see a list of upcoming events.

> Scenario 2 
User should see a list of suggestions when they search for a city.

- GIVEN the main page is open;
- WHEN user starts typing in the city textbox;
- THEN the user should receive a list of cities (suggestions) that match what they’ve typed.

>Scenario 3
User can select a city from the suggested list.

- GIVEN user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
- WHEN the user selects a city (e.g., “Berlin, Germany”) from the list;
- THEN their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.


2. Show/Hide Event Details.
USER STORY:
- AS a user 
- I should be able to show or hide event details, 
- SO they will be not always hidden or displayed.

> Scenario 1
User wants to see event details by clicking a button.
- GIVEN user wanted to see event details;
- WHEN he clicks the "Show details" button.
- THEN the user should see more details about event.

> Scenario 2
User wants to hide event details by clicking a button.
- GIVEN user wanted to see less information about an event.
- WHEN he clicks "Hide details" button.
- THEN details will be hidden.


3. Specify Number of Events.
USER STORY:
- AS a user
- I should be able to specify number of events.
- SO that the right amount of events will be displayed.

> Scenario 1
User wants to specify how many events he wants to see.
- GIVEN user specified a number of events
- WHEN searching for events
- THEN the right amount of events will be displayed.

> Scenario 2
User didn't provide a number of events to display.
- GIVEN user didn't provide a number
- WHEN he searched for events
- THEN all events meeting other criteria should be displayed.

4. Use the App When Offline.
USER STORY:
- As a user
- I want to use the APP offline
- So App is available without internet connection

> Scenario 1
User wanted to use App, but he had no internet connection.
- GIVEN User could store current state of the App on his device
- WHEN he has access to internet
- THEN user will will be able to use stored state of app.

5. Add an App Shortcut to the Home Screen.
USER STORY:
- AS a user,
- I can add an App Shortcut to the Home Screen
- SO I can access the App quickly

There is nothing what a programmer can do in this case, it can not be tested

6. Display Charts Visualizing Event Details.
USER STORY:
- AS a user,
- I can view charts visualizing event details
- SO I can easily understand the event data

SCENARIO 1:
- GIVEN I am on the event details page
- WHEN I view the event details
- THEN I should see a chart visualizing the event data

SCENARIO 2:
- GIVEN I have selected a specific event
- WHEN I navigate to the event details page
- THEN I should see a chart that displays the event's data in a visual format