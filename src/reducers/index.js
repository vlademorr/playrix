const initialState = {
    events: localStorage
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "EVENT_ADDING":
            window.localStorage.setItem(action.payload.eventName, `${action.payload.eventTime}`);
            return {
                ...state
            };
        case "EVENT_DELETE":
            window.localStorage.removeItem(action.payload);
            return {
                ...state
            };
        default:
            return state;
    }
};

export default reducer;