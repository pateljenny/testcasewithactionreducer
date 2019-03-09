import axios from 'axios'

export const baseService = axios.create({
    baseURL: 'https://reqres.in/api'
})


export const login = (user) => {
    return baseService.post('/login', user);
}
