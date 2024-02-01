import axios from 'axios';

const STRAPI_ADAPTER = axios.create({
    baseURL: 'https://prod-strapi.jkyog.org',
    headers: {
        Authorization: 'bearer ' + process.env.REACT_APP_STRAPI_TOKEN,
    }
});

const CUSTOM_API_ADAPTER = axios.create({
    baseURL: 'https://sso.jkyog.org/api/v1',
    // baseURL: 'http://localhost:8001/api/v1'
});

const createErrorHandlingInterceptor = (adapter) => {
    adapter.interceptors.response.use(response => response, error => {
        if (error.response && error.response.status === 429) {
            window.location = "/too-many-request";
        }
        return Promise.reject(error);
    });
};

// Applying the interceptor to the adapters
createErrorHandlingInterceptor(STRAPI_ADAPTER);
createErrorHandlingInterceptor(CUSTOM_API_ADAPTER);

export { STRAPI_ADAPTER, CUSTOM_API_ADAPTER };
