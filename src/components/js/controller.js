import Axios from 'axios';

export default {
    axios: Axios.create({
        baseURL: process.env.ENDPOINT,
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        responseType: "json"
    }),
    isLogined: () => !!localStorage.token,
    null2empty: mess => {
        for(let i=0;i<mess.length;i++) {
            if (mess[i] == null) {
                mess[i] = [""]
            }
        }
        console.log(mess)
        return mess
    }
}

