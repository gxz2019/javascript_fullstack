## react 生命周期
 - 挂载
当组件实例被创建并插入DOM中时 其生命周期调用顺序如下：
 ## constructor()
  在React组件挂载之前，会调用他的构造函数 
 ## static getDerivedStateFromProps()
  static  getDerivedStateFromProps(props,state)
  他会在render方法之前调用，并且在初始挂载及后续更新时都会被调用
  它应该返回一个对象来更新state 如果返回null则不更新内容
 ## render
 render是class组件唯一必须要实现的方法
 ## componenDidMount
 componDidMount会在组件挂载后（插入DOM树中）立即调用 

  - 更新
  ## static getDerivedStateFromProps()
  ## shouleComponentUpdate()
  当props或state发生改变，会返回true
  ## render
  渲染
  ## componentDidUpdate()
  