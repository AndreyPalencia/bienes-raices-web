import axios from "axios";

const api = axios.create(
    {
        baseURL: process.env.REACT_APP_URL_BACKEND,
    }
)

/* const apiImagenes = axios.create(
    {
        baseURL: process.env.REACT_APP_URL_IMAGENES,
    }
) */

//Conifiguran el intercetor de respustas htttp para validar si error de token caducado 

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = token;
            config.headers['User-Agent'] = 'CustomUserAgent/1.0';
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response && error.response.status === 401){
            alert("Tu sesión ha expirado. Por favor, iniciar sesión de nuevo.");
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
)


export {api};