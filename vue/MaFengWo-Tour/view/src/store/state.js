const state = {
  city: '北京',
  date:{
    Month1: (new Date()).getMonth() + 1,
    Day1: (new Date()).getDate(),
    Month2: (new Date()).getMonth() + 1,
    Day2: (new Date()).getDate() + 1
  }
}

export default state