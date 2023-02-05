import axios from 'axios'

const {REACT_APP_API_URL} = process.env;

const API = axios.create({
    baseURL : REACT_APP_API_URL,
    withCredentials: true
})

// API.interceptors.request.use((req,) =>{
//     if(sessionStorage.getItem("token")) {
//         req.headers.Authorization = `Bearer ${JSON.parse(sessionStorage.getItem("token")).token
//     }`
//     }
//     return req
// })

export const loginUser = (userInfo) => API.post('/api/user/login', userInfo) 
export const registerUser = (userInfo) => API.post('/api/user/register', userInfo) 

export const getQuizzes = () => API.get('/api/quiz/all')
export const getQuizById = (id) => API.get(`/api/quiz/${id}`)
export const addQuiz = (quizInfo) => API.post('/api/quiz/add', quizInfo)
