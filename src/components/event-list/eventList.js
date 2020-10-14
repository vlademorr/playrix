import React from 'react';
import { List, Button } from 'antd';
import moment from "moment";

const EventList = ({ events, eventDelete }) => {
    const now = moment().unix();
    const renderItem = (event) => {
        const eventTime = events[event];
        const daysToEvent = (eventTime - now) / 3600 / 24;
        const hoursToEvent = daysToEvent - Math.floor(daysToEvent);

        const completedEvent = eventTime - now <= 0 ? "blueStyle" : "";
        const almostCompletedEvent = eventTime - now <= 1800 && eventTime - now > 0 ? "redStyle" : "";
        const middleTimeEvent = eventTime - now <= 7200 ? "yellowStyle" : "";
        const longTimeEvent = eventTime - now >= 7200 ? "greenStyle" : "";
        return (
            <List.Item className={
                `event-list-item
                 ${completedEvent}
                 ${almostCompletedEvent}
                 ${middleTimeEvent}
                 ${longTimeEvent}`
            }>
                <p>
                    {
                        completedEvent ? "Time is up" :
                        <>
                            {Math.floor(daysToEvent) > 0 ? `${Math.floor(daysToEvent)} d ` : null}
                            {Math.floor(hoursToEvent * 24) > 0 ? `${Math.floor(hoursToEvent * 24)} h ` : null}
                            {Math.floor(((hoursToEvent * 24) - Math.floor(hoursToEvent * 24)) * 60)} min
                        </>
                    }
                </p>
                <p>
                    {event}
                </p>
                <Button type="primary" danger onClick={() => eventDelete(event)}>
                    Delete
                </Button>
            </List.Item>
        )
    };
    return (
        <div className="event-list">
            <List
                bordered
                dataSource={Object.keys(events)}
                renderItem={renderItem}
            />
        </div>
    );
};

export default EventList;