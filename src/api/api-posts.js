import { getAxiosInstanceAuth , getAxiosInstance } from "./api";


export const getMyPostsApi = (callback) => {
    getAxiosInstanceAuth().get("/my-divar/my-posts")
        .then(response => {
            const data = response.data;
            callback(true,data);
        })
        .catch(error => {
            callback(false,error.response.data.message);
        })
};
export const getPostByIDApi = (id,callback) => {
    getAxiosInstance().get(`/posts/${id}`)
        .then(response => {
            const data = response.data;
            callback(true,data);
        })
        .catch(error => {
            callback(false,error);
        })
};
export const getPostsByCityApi = (city,callback) => {
    getAxiosInstance().get(`/${city}`)
        .then(response => {
            const data = response.data;
            callback(true,data);
        })
        .catch(error => {
            console.log(error);
            callback(false,error.response.data.message);
        })
};
export const newPostRequestApi= (formData,callback) => {
    getAxiosInstanceAuth().post("/my-divar/new",formData)
        .then(response => {
            console.log("response",response)
            callback(true,response);
        }).catch(error => {
        console.log(error);
        callback(false,error.response.data);
    })

};


