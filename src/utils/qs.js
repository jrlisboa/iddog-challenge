import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const { location } = history;

export default function QueryStringToJSON() {
    const pairs = location.search.slice(1).split('&');
    const result = {};
    pairs.forEach((pair) => {
        // eslint-disable-next-line no-param-reassign
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    return JSON.parse(JSON.stringify(result));
}
