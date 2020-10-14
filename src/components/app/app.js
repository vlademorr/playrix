import React from "react";
import EventAdding from "../forms/eventAdding";
import EventListContainer from "../event-list/eventListContainer";
import 'antd/dist/antd.css';
import "./app.css";

const App = () => {
    return (
        <>
            <EventAdding/>
            <EventListContainer/>
        </>
    );
};

export default App;