import axios from 'axios';

const Api = () => {
    return axios.create({
        baseURL: 'https://reqres.in/api/',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export default Api;