enum Direction {
  up = 10,
  Down,
  Left,
  Right
}
console.log(Direction.up)

// 异构枚举
enum yg{
  No = 0,
  Yes = 'yes',
}

// 反向映射
var obj = {
  name : 'wn'
}
obj['name']
console.log(Direction[Direction['up']])