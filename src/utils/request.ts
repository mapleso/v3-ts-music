import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  // withCredentials: true
})

//请求拦截器


//响应拦截器


export default service