import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from './EventList'
import { sampleData } from '../../../app/api/sampleData'

const EventDashboard = () => {
    const [events, setEvents] = useState(sampleData);

    // const handleCreateEvent = (event) => {
    //     setEvents([...events, event])
    // }
    // const handleUpdateEvent = (updatedEvent) => {
    //     setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt))
    // };
    const handleDeleteEvent = (eventID) => {
        setEvents(events.filter(evt => evt.id !== eventID));
    }
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} deleteEvent={handleDeleteEvent} />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Event filters</h2>
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard
