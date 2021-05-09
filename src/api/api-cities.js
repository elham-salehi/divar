import {getAxiosInstance} from "./api";

export const getAllCities = (callback) => {
    getAxiosInstance().get("/cities")
        .then(response => {
            const data = response.data;
            callback(true,data);
        })
        .catch(error => {
            console.log(error);
            callback(false,error);
        })
}