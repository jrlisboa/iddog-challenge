import keyMirror from 'key-mirror';

const Actions = keyMirror({
    SIGNUP: undefined,
    SIGNUP_REQUEST: undefined,
    SIGNUP_SUCCESS: undefined,
    SIGNUP_ERROR: undefined,
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
