//封装接口请求

import axios from 'axios'


//设置请求时间和域名
axios.defaults.timeout = 5000;
axios.defaults.baseUrl = 'http://localhost:3000/gxz';


//封装get方法

function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: params })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default {
  'get':get
}


