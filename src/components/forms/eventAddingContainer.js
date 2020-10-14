import React  from 'react';
import { connect } from "react-redux";
import { eventAdding } from "../../actions/index";
import EventAdding from "./eventAdding";

const EventAddingContainer = ({eventAdding}) => {
    return <EventAdding eventAdding={eventAdding}/>
};

const mapDispatchToProps = {
    eventAdding
};

export default connect(null, mapDispatchToProps)(EventAddingContainer);