import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true
});

export default {
    auth: {
        login: ({ nick, password }) => axiosInstance.post('/auth', { nick, password })
    },
    user: {
        create: ({ nick, password }) => axiosInstance.post('/user', { nick, password }),
        profile: () => axiosInstance.get('/user')
    }
};
