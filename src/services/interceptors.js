import axios from 'axios';
// import { baseApiUrl } from '../../config/constants';

const interceptors = (baseApiUrl) => {
    const instance = axios.create({
        baseURL: baseApiUrl,
    });

    // we can pass auth token here
    // instance.defaults.headers.common.Authorization = 'auth token';

    instance.interceptors.request.use((request) => {
        return request;
    });

    instance.interceptors.response.use((response) => {
        return response;
    });

    return instance;
};

export default interceptors;
