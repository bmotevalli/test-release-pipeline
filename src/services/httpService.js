import interceptors from './interceptors';

class Api {
    constructor(baseApiUrl) {
        this.baseApiUrl = baseApiUrl;
        this.axios = interceptors(baseApiUrl);
        this.hasError = false;
        this.error = null;
    }

    GET = async (url, input) => {
        try {
            return await this.axios.get(url, {
                params: input,
            });
        } catch (error) {
            this.hasError = true;
            this.error = error;
            throw new Error(error);
        }
    };

    POST = async (url, input) => {
        try {
            return await this.axios.post(url, input);
        } catch (error) {
            this.hasError = true;
            this.error = error;
            throw new Error(error);
        }
    };

    DELETE = async (url) => {
        try {
            return await this.axios.post(url);
        } catch (error) {
            this.hasError = true;
            this.error = error;
            throw new Error(error);
        }
    };

    PUT = async (url, input) => {
        try {
            return await this.axios.put(url, input); // changed this from post to put.
        } catch (error) {
            this.hasError = true;
            this.error = error;
            throw new Error(error);
        }
    };
}

export default Api;
