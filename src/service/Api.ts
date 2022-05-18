/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: 'https://reqres.in/api/',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}