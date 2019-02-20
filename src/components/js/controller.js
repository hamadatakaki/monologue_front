import Axios from 'axios';

export default {

    axios: Axios.create({
        baseURL: process.env.ENDPOINT,
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        responseType: "json"
    })
}

