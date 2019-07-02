import keyMirror from 'key-mirror';

const Actions = keyMirror({
    FEED: undefined,
    FEED_REQUEST: undefined,
    FEED_SUCCESS: undefined,
    FEED_ERROR: undefined,
});

const State = keyMirror({
    IDLE: undefined,
    REQUESTING: undefined,
    SUCCESS: undefined,
    ERROR: undefined,
});

export {
    Actions,
    State,
};
