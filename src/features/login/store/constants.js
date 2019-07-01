import keyMirror from 'key-mirror';

const Actions = keyMirror({
    SIGNIN: undefined,
    SIGNIN_REQUEST: undefined,
    SIGNIN_SUCCESS: undefined,
    SIGNIN_ERROR: undefined,
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
