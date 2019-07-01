/* eslint-disable import/prefer-default-export */
import { Actions } from './constants';

export function signin(email) {
    return {
        type: Actions.SIGNIN,
        params: { email },
    };
}
