import { createReducer } from '../../../utils/reduxHelper';
import { Actions, State } from './constants';

const initialState = {
    state: State.IDLE,
    loading: false,
    list: [],
    error: undefined,
};

function handleFeedRequest(state) {
    return {
        ...state,
        state: State.REQUESTING,
        list: [],
        loading: true,
    };
}

function handleFeedSuccess(state, { list, breed }) {
    return {
        ...state,
        state: State.SUCCESS,
        loading: false,
        list,
        breed,
    };
}

function handleFeedError(state, { error }) {
    return {
        ...state,
        state: State.ERROR,
        loading: false,
        error,
    };
}

export default createReducer({
    ...initialState,
},
{
    [Actions.FEED_REQUEST]: handleFeedRequest,
    [Actions.FEED_SUCCESS]: handleFeedSuccess,
    [Actions.FEED_ERROR]: handleFeedError,
});
