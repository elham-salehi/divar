import {getAxiosInstance} from "./api";

export const getAllCategoriesApi = (callback) => {
    getAxiosInstance().get("/categories")
        .then(response => {
            const data = response.data;
            callback(true,data);
        })
        .catch(error => {
            callback(false,error.response.data.message);
        })
}