import axios from 'axios'

const axiosIns = axios.createInsatnce({
  baseUrl:'http://localhost:3000'
})


export default axiosIns