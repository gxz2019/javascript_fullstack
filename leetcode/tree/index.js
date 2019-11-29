var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

//前序遍历
// var preOrder = function (node) {
//   if(node) {
//     preOrder(node.left)

//     console.log(node.value)
//     // preOrder(node.left)
//     preOrder(node.right)
//   }
// }
// console.log(preOrder(tree))

//深度优先，不能使用递归
// var preOrderUnRecur = function (node) {
//   if(!node) {
//     throw new Error('Empty Tree')
//   }
//   var stack = [];
//   stack.push(node)
//   while(stack.length !== 0) {
//     node = stack.pop();
//     console.log(node.value)
//     if (node.right) {
//       stack.push(node.right)
//     }
//     if (node.left) {
//       stack.push(node.left)
//     }
//   }
// }
// preOrderUnRecur(tree)

//使用广度优先，排除递归

function BreadthFirst(node) {
  let queue = [];
  queue.push(node)
  while(queue.length !== 0) {
    let node1 = queue.shift()
    console.log(node1.value)
    if (node1.left) {
      queue.push(node1.left)
    }
    if(node1.right) {
      queue.push(node1.right)
    }
  }
}
BreadthFirst(tree)
