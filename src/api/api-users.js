import {getAxiosInstance} from "./api";

export const sendVerifyCodeApi= (user,callback) => {
    getAxiosInstance().post("/sendVerifyCode",user)
        .then(response => {
            callback(true,response);
        }).catch(error => {
        console.log(error);
        callback(false,error.response.data.message);
    })

};

export const loginApi= (user,callback) => {
    getAxiosInstance().post("/login",user)
        .then(response => {
            callback(true,response);
        }).catch(error => {
        console.log(error);
        callback(false,error.response.data.message);
    })

};