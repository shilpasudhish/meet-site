Feature: Specify number of events
  Scenario: User does not enter in number of events
    Given the user opens the app
    When user does not type anything in the number feild
    Then the default number of events are shown
  Scenario: User does enter in number of events
    Given the user opens the app
    When user types a number in the number feild
    Then user should see a list of events with the number typed as the length