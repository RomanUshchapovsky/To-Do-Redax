import axios from 'axios';

export class Api {
    constructor() {
        // TODO
    }

    get(url, headers, params) {
        return axios.get(url, headers, params)
    }

    // TODO
}