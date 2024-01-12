import axios from 'axios';

export function axiosConfig() {

    // Setup a request interceptor in order to have basic auth
    // by default in all requests
    axios.interceptors.request.use(config => {
        config.auth = {
            username: 'user',
            password: 'password'
        };
        return config;
    });
}