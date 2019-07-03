/* eslint-disable import/prefer-default-export */
import { Actions } from './constants';

export function signup(email) {
    return {
        type: Actions.SIGNUP,
        params: { email },
    };
}
