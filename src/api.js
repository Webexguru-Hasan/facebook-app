import axios from 'axios'

const {REACT_APP_API_URL} = process.env

const API = axios.create({
    baseURL : "https://backend-minhajsadik.vercel.app"
})

API.interceptors.request.use((req) =>{
    if(sessionStorage.getItem("token")) {
        req.headers.Autorization = `Bearer ${JSON.parse(sessionStorage.getItem("token")).token
    }`
    }
    return req
})

export const loginUser = (userInfo) => API.post('/api/user/login', userInfo) 
export const registerUser = (userInfo) => API.post('/api/user/register', userInfo) 