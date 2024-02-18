import axios from 'axios'
import config from '../config/index.js'
import { ElMessage } from 'element-plus'
const NETWORK_ERROR_MSG = '网络请求异常，请稍后重试.....'
//创建一个axios实例对象
const service = axios.create({
  baseURL:config.baseApi,
})

//在请求之前做一些事情
service.interceptors.request.use((req)=>{
  //可以自定义header
  // jwt-token认证的时候
  return req
})

// 在请求之后做一些事情
service.interceptors.response.use((res)=>{
  const {status,data,msg}=res;//这里mock的状态码是status
  if(status==200){
    return data;
  }else{
    //网络请求错误
    ElMessage.error(msg||NETWORK_ERROR_MSG)
    return Promise.reject(msg||NETWORK_ERROR_MSG)
  }
})

//封装的核心函数
function request(options){
  //处理大小写
  options.method=options.method||'get';
  if(options.method.toLowerCase()=='get'){
    options.params=options.data;
  }
  //对mock的处理
  let isMock = config.mock;
  if(typeof options.mock !== 'undefined'){
    isMock = options.mock;
  }
  //对线上环境做处理
  if(config.env=='prod'){
    service.defaults.baseURL=config.baseApi;//线上环境不允许mock，所以只用baseApi
  } else{
    service.defaults.baseURL=isMock?config.mockApi:config.baseApi;
  }

  return service(options)
}

export default request