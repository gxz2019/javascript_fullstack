import React, { Component } from 'react'

export default class App extends Component {
  //// props = {age:10,name:'计数器'}
  static defaultProps = {
    name: '计数器'
  }
  constructor(props) {
    //Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super();//this.props = props;
    this.state = { number: 0, users: [] };//初始化默认的状态对象
    console.log('1. 父组件constructor 初始化 props and state');
  }
  //componentWillMount在渲染过程中可能会执行多次
  componentWillMount() {
    console.log('2. 父组件componentWillMount 组件将要挂载');
  }
  //componentDidMount在渲染过程中永远只有执行一次
  //一般是在componentDidMount执行副作用，进行异步操作
  componentDidMount() {
    console.log('4. 父组件componentDidMount 组件挂载完成');
    fetch('https://api.github.com/users').then(res => res.json()).then(users => {
      console.log(users);
      this.setState({ users });
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Counter', nextProps, nextState);
    console.log('5. 父组件shouldComponentUpdate 询问组件是否需要更新');
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('6. 父组件componentWillUpdate 组件将要更新');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('7. 父组件componentDidUpdate 组件更新完毕');
  }
  add = () => {
    this.setState({ number: this.state.number });
  };
  render() {
    console.log('我是父组件的render')
    return (
      <div style={{border:'5px solid red',padding:'5px'}}>
         <p>{this.props.name}:{this.state.number}</p>
        <button onClick={this.add}>+</button>
        <ul>
            {
                this.state.users.map(user=>(<li>{user.login}</li>))
            }
        </ul>
        {this.state.number%2==0&&<SubCounter number={this.state.number}/>}
      </div>
    )
  }
}

class SubCounter extends Component{
    constructor(props){
        super(props);
        this.state = {number:0};
        console.log('子组件的constructor')
    }
    componentWillUnmount(){
        console.log('SubCounter componentWillUnmount');
    }
    //调用此方法的时候会把新的属性对象和新的状态对象传过来
    shouldComponentUpdate(nextProps,nextState){
        console.log('子组件是否更新',nextProps,nextState);
        if(nextProps.number%3==0){
            return true;
        }else{
            return false;
        }
    }
    componentWillMount() {
      console.log(' 子组件componentWillMount 组件将要挂载');
    }
    componentDidMount() {
      console.log('子组件 componentDidMount 组件挂载完成');
    }
    //componentWillReceiveProp 组件收到新的属性对象
    // componentWillReceiveProps(){
    //   console.log('子组件SubCounter 1.componentWillReceiveProps')
    // }
    componentWillUpdate(nextProps, nextState) {
      console.log('6. 子组件componentWillUpdate 组件将要更新');
    }
    componentDidUpdate(prevProps, prevState) {
      console.log('7. 子组件componentDidUpdate 组件更新完毕');
    }
    render(){
        console.log('我是子组件的render')
        return(
            <div style={{border:'5px solid green'}}>
                <p>{this.props.number}</p>
            </div>
        )
    }
}
