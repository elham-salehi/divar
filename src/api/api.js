import axios from "axios";


export const getAxiosInstance = () => {
    return axios.create({
        baseURL: "https://divar-api.iran.liara.run/api",
    });
}
export const getAxiosInstanceAuth = () => {
    return axios.create({
        baseURL: "https://divar-api.iran.liara.run/api",
        headers: {
            'x-auth-token':localStorage.getItem('x-auth-token'),
            'Content-Type': 'multipart/form-data'
        }
    });
}
export const getAxiosInstanceAuthSendJson = () => {
    return axios.create({
        baseURL: "https://divar-api.iran.liara.run/api",
        headers: {
            'x-auth-token':localStorage.getItem('x-auth-token'),
            'Content-Type': 'application/json'

        }
    });
}
