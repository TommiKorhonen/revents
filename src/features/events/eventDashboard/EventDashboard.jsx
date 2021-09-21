import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import EventForm from '../eventForm/EventForm'
import EventList from './EventList'
import { sampleData } from '../../../app/api/sampleData'

const EventDashboard = ({ formOpen, setFormOpen, selectEvent, selectedEvent }) => {
    const [events, setEvents] = useState(sampleData);

    const handleCreateEvent = (event) => {
        setEvents([...events, event])
    }
    const handleUpdateEvent = (updatedEvent) => {
        setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt))
        selectEvent(null);
    };
    const handleDeleteEvent = (eventID) => {
        setEvents(events.filter(evt => evt.id !== eventID));
    }
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvent} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen &&
                    <EventForm
                        createEvent={handleCreateEvent}
                        setFormOpen={setFormOpen}
                        setEvents={setEvents}
                        selectedEvent={selectedEvent}
                        updatedEvent={handleUpdateEvent}
                        key={selectedEvent ? selectedEvent.id : null}
                    />}
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard
