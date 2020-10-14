const eventAdding = (event) => {
    return {
        type: "EVENT_ADDING",
        payload: event
    };
};

const eventDelete = (event) => {
    return {
        type: "EVENT_DELETE",
        payload: event
    };
};

export {
    eventAdding,
    eventDelete
}