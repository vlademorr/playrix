import React, {useState} from 'react';
import { connect } from 'react-redux';
import { eventDelete } from "../../actions";
import EventList from "./eventList";

const EventListContainer = ({ events, eventDelete }) => {
    const [update, setUpdate] = useState(0);
    setTimeout(() => {
        setUpdate(update + 1)
    }, 100000);
    return (
        <EventList
            events={events}
            eventDelete={eventDelete}
        />
    );
};


const mapStateToProps = (state) => {
    return{
        events: state.events,
        eventsLength: Object.keys(state.events).length
    }
};

const mapDispatchToProps = {
    eventDelete
};

export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);