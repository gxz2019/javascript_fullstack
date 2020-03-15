## react-hooks

hook的意思是钩子

React hooks 的目的就是组件尽量写成纯函数  如果需要外部功能和副作用 就用钩子把外部代码‘钩’进来

最常用的钩子：
useState()
useContext()
useReducer()
useEffect()


useState()  状态钩子
用于为函数组件引入状态(state)  纯函数不能有状态  所以把状态放在钩子里面