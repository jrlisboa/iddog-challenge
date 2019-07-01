import fetch from 'isomorphic-fetch';

const { REACT_APP_IDDOG_API: API_URL } = process.env;

function getHeaders(headers = {}, bearer) {
    const Authorization = (bearer) ? `${bearer}` : undefined;

    return {
        'Content-Type': 'application/json',
        Authorization,
        ...headers,
    };
}

export async function http(userOptions = {}) {
    try {
        const url = `${API_URL}${userOptions.path}`;
        const body = userOptions.payload ? JSON.stringify(userOptions.payload) : undefined;
        const headers = getHeaders(userOptions.headers, userOptions.bearer, body);
        const method = userOptions.method || 'GET';

        const options = {
            method,
            body,
            headers,
        };

        const response = await fetch(url, options);
        const json = (response.status === 200) ? await response.json() : {};

        if (response.status > 299) {
            throw new Error();
        }

        return {
            json,
            response,
        };
    }
    catch (error) {
        throw error;
    }
}

export async function get(path, { ...args }) {
    const options = {
        method: 'GET',
        path,
        ...args,
    };

    const res = await http(options);
    return res;
}

export async function post(path, { ...args }) {
    const options = {
        method: 'POST',
        path,
        ...args,
    };

    const res = await http(options);
    return res;
}
