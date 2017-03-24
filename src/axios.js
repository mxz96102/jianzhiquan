import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://job.4nian.cc/com.cn.plurality/',
  headers: {
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Credentials':'*',
    'Access-Control-Allow-Methods':'*'
  }
});

export default axiosInstance
