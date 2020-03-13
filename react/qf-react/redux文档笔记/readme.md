## redux
什么是redux？
一个状态管理容器，提供可预测管理化的状态管理

应用中所有state(数据或者说状态)都是一个对象树的形式储存在一个单一的store里面，即只能由一个store
惟一能改变state的办法就是触发action —— 一个描述发生什么的对象
为了描述action如何改变state树，你需要编写reducers

什么是reducers?
形式为(state,action) => state   reducer是一个纯函数 该行为描述了action如何把state换变成下一个state
需要注意一点的是reducer并不能改变state，他只能接收state，他返回的state是一个newstate

有关store的api   
1. subscribe   订阅模式更新视图层的数据
2. dispatch    改变内部state的唯一方法  往往是dispatch(action)
3. getState    获取到store里的state


redux的三大原则
1. 单一数据源 整个应用的state都被储存在一个Object tree上面   并且这个tree只存在唯一的一个store
2. state是只读的  唯一改变state的方法就是触发action action是一个用于描述


