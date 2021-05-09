import {getAxiosInstance} from "./api";

export const newUserRequest= (data,callback) => {
    getAxiosInstance().post("/users",data)
        .then(response => {
            callback(true);
        }).catch(error => {
        console.log(error);
        callback(false);
    })

};