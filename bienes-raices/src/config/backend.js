import axios from "axios";

const api = axios.create(
    {
        baseURL: process.env.URL_BACKEND_,
    }
)


//Conifiguran el intercetor de respustas htttp para validar si error de token caducado 
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

const fetchToken = async (url,options = {}) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            Authorization : token,
        }, 
        ...options,
    }
    return api(url,config)
}