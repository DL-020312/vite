import axios from "axios"
import Cookies from "js-cookie";
const service = axios.create({
  baseURL: "https://api-test.babycare.com/api/gateway/",
  timeout:30000
})


const handleError = ()=>{
  console.log("请求出错了")
  return;
}

// 请求拦截器
service.interceptors.request.use((config) => {
  const token = Cookies.get("access_token");
  if (token) {
    config.headers["Authorization"] = "Bearer " + token; // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config;
}, handleError);


// 相应拦截器
service.interceptors.response.use((response)=>{
  return response.data
})

export default service