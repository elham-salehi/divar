import {getAxiosInstance} from "./api";

export const getAllPosts = (callback) => {
    getAxiosInstance().get("/posts")
        .then(response => {
            const data = response.data;
           callback(true,data);
        })
        .catch(error => {
            console.log(error);
            callback(false,error);
        })
}
export const newPostRequest= (data,callback) => {
    getAxiosInstance().post("/posts",data)
        .then(response => {
            callback(true);
        }).catch(error => {
        console.log(error);
        callback(false);
    })

};


