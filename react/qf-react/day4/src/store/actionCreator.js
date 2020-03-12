import axios from 'axios'


export const getValue = (val) => {
  return {
    type:'getValue',
    value:val
  }
}

export const getData = () => {
  axios.get('http://localhost:4000/data').then(res => {
    return res.data.list
  })
}