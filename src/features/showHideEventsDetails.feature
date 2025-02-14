Feature: showHideEventsDetails
    Scenario: Event element is collapsed by default.
        Given the user opened the app
        When the event list is rednered
        Then event details is not shown
    Scenario: User expand an event to see the details.
        Given the user can see the rendered events
        When the user clicks the show details button
        Then the event details are shown
    Scenario: User collapse an event to hide the details.
        Given the user clicked the show details button
        When the user clicks the hide details button
        Then the event details are hidden