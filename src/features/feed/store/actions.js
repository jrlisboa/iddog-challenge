/* eslint-disable import/prefer-default-export */
import { Actions } from './constants';

export function feed(category) {
    return {
        type: Actions.FEED,
        params: { category },
    };
}
