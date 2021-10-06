import cuid from 'cuid';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import { createEvent, updateEvent } from '../eventActions';

const EventForm = ({ match, history }) => {
    const dispatch = useDispatch();
    const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id))

    const initialValues = selectedEvent ?? {
        title: "",
        category: "",
        description: "",
        city: "",
        venue: "",
        date: "",
    }

    const [values, setValues] = useState(initialValues);

    const handleSubmit = (e) => {
        selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(createEvent({
                ...values, id: cuid(), hostedBy: "Bob", attendees: [],
                hostPhotoURL: "/assets/user.png"
            }));
        history.push("/events")
        e.preventDefault();
    };
    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    return (
        <Segment clearing>
            <Header content={selectedEvent ? "Edit the event" : "Create new event"} />
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <input type="text" name="title" placeholder="Event title" value={values.title} onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" name="category" placeholder="Category" value={values.category} onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" name="description" placeholder="Description" value={values.description} onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" name="city" placeholder="City" value={values.city} onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" name="venue" placeholder="Venue" value={values.venue} onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="date" name="date" placeholder="Date" value={values.date} onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Button type="submit" floated="right" positive content="Submit" />
                <Button type="submit" floated="right" content="Cancel" as={Link} to="/events" />
            </Form>
        </Segment>
    )
}

export default EventForm
