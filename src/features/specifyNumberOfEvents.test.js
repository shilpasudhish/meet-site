import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor, fireEvent } from '@testing-library/react';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('User does not enter in number of events', ({ given, when, then }) => {
        let AppComponent;
        given('the user opens the app', () => {
            AppComponent = render(<App />);
        });
        when('user does not type anything in the number feild', () => {
            // No action needed
        });
        then('the default number of events are shown', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });
    });
    test('User does enter in number of events', ({ given, when, then }) => {
        let AppComponent;
        given('the user opens the app', () => {
            AppComponent = render(<App />);
        });
        when('user types a number in the number feild', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const numberOfEventsInput = within(AppDOM).getByLabelText('Number of Events');
            fireEvent.change(numberOfEventsInput, { target: { value: 3 } });
        });
        then('user should see a list of events with the number typed as the length', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(3);
            });
        });
    });
});