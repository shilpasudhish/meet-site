import React from 'react'; 
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor, fireEvent } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';

const feature = loadFeature('./src/features/showHideEventsDetails.feature');

defineFeature(feature, test => {
    test('Event element is collapsed by default.', ({ given, when, then }) => {
        let AppComponent;
        given('the user opened the app', () => {
          AppComponent = render(<App />);
        });
        when('the event list is rednered', async () => {
          const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
      
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
            });
      
        });
        then('event details is not shown', async () => {
          const AppDOM = AppComponent.container.firstChild;
          const eventDetails = AppDOM.querySelector('.details');
          expect(eventDetails).not.toBeInTheDocument();
          });
    });
    test('User expand an event to see the details.', ({ given, when, then }) => {
      let AppComponent;
      given('the user can see the rendered events', async () => {
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
      
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
            });
      });
      when('the user clicks the show details button', async () => {
        const AppDOM = AppComponent.container.firstChild;
        const showDetailsButtons = within(AppDOM).queryAllByText('Show Details');
        fireEvent.click(showDetailsButtons[0]); // Kliknij pierwszy przycisk "Show Details"
      });
      then('the event details are shown', async () => {
          const AppDOM = AppComponent.container.firstChild;
          const eventDetails = AppDOM.querySelector('#event-description');
          expect(eventDetails).toBeInTheDocument();
        });
    });
    test('User collapse an event to hide the details.', ({ given, when, then }) => {
      given('the user clicked the show details button', async () => {
        const user = userEvent.setup();
        const allEvents = await getEvents();
        const EventComponent = render(<Event event={allEvents[0]} />)
        const showDetails = EventComponent.queryByText('Show details');
        await user.click(showDetails);
      });
      when('the user clicks the hide details button', async () => {
        const user = userEvent.setup();
        const allEvents = await getEvents();
        const EventComponent = render(<Event event={allEvents[0]} />)
        const hideDetails = EventComponent.queryByText('Hide details');
        await user.click(hideDetails);
      });
      then('the event details are hidden',async () => {
        let AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
          const eventDetails = AppDOM.querySelector('.details');
          expect(eventDetails).not.toBeInTheDocument();
      });
    });
});