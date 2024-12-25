import axios from "axios";

//create axios object with basic configuration
const axiosHttp = axios.create({
    baseURL: window.location.hostname.includes("localhost") ? "http://localhost:8080" : "http://wwww.hemaetitecorp.com"
});

//create interceptor for request
// axiosHttp.interceptors.request.use(() => {
//     (config) => {
//         const token = !!sessionStorage.getItem("accesToken");
//         return {
//             ...config,
//             headers: {
//                 ...axios(token && { 'Authorization':`Bearer ${sessionStorage.getItem("accessToken")}`}),
//                 ...config.headers
//             }
//         }
//     }, (error) => {
//         return Promise.reject(error)
//     }
// });


axiosHttp.interceptors.request.use(
    (config) => {
        const token = !!sessionStorage.getItem("accessToken");
        return{
            ...config,
            headers:{
                ...axios(token && {'Authorization':`Bearer ${sessionStorage.getItem("accessToken")}`}),
                ...config.headers
            }
        }
    },
    (error) => {
        return Promise.reject(error)
    }
);

//create interceptor for response 

axiosHttp.interceptors.response.use(
        (response)=>{
            return response.data;
        },
        (error)=>{
            return Promise.reject(error);
        }
    );
    

//globe request http request

export const GET = (url, header = {}) => {
    return axiosHttp.get(url, { header: header });
}
export const DELETE = (url, header = {}) => {
    return axiosHttp.delete(url, { header: header });
}
export const POST = (url, payload, header = {}) => {
    return axiosHttp.post(url, { header: header });
}
export const PUT = (url, payload, header = {}) => {
    return axiosHttp.put(url, payload, { header: header });
}






// import axios from "axios";
// //
// const axiosHttp=axios.create({
// baseURL:window.location.hostname.includes("localhost")? "http://localhost:8080":"http://www.hematitecorp.com"
// });
// //create interceptor for request
// axiosHttp.interceptors.request.use(
//     (config)=>{
//         const token=!!sessionStorage.getItem("accessToken");
//         return{
//             ...config,
//             headers:{
//                 ...axios(token && {'Authorization':`Bearer ${sessionStorage.getItem("accessToken")}`}),
//                 ...config.headers
//             }
//         }
//     },
//     (error)=>{
//         return Promise.reject(error)
//     }
// );

// axiosHttp.interceptors.response.use(
//     (response)=>{
//         return response.data;
//     },
//     (error)=>{
//         return Promise.reject(error);
//     }
// )
// // Globle Request Http Request
// export const GET=(url,header={})=>{
//     return axiosHttp.get(url,{headers:header});
// }

// export const DELETE=(url,header={})=>{
//     return axiosHttp.delete(url,{headers:header});
// }
// export const POST=(url,payload,header={})=>{
//     return axiosHttp.get(url,payload,{headers:header});
// }
// export const PUT=(url,payload,header={})=>{
//     return axiosHttp.PUT(url,payload,{headers:header});
// }