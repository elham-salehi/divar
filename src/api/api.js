import axios from "axios";

export const getAxiosInstance = () => {
  return axios.create({
        baseURL: "http://localhost:4000",
        headers: {

            API_KEY:"12yujlolkkmlnbbghjmnhjkmnbmnhygf"

        }
 });
}
