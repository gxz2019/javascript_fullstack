## react-router

1. import { BrowserRouter as Router,Route,Link} from 'react-router-dom'
2. <Router>
    <Link to="..."></Link>
    <Route path="...></Route>
   </Router>

exact 精准匹配

3. 路由跳转传递参数
   <!-- <Link to> -->
   <Route path=".../:id"></Route>

4. 重定向 Redirect
   1. 标签式重定向   就是利用<Redirect>标签进行重定向  业务逻辑不复杂时建议使用这种
   2. 编程式重定向   这种是利用编程的方式  一般用于业务逻辑之中  比如登录跳转到会员中心页面
   
   重定向和跳转有一个重要的区别  就是跳转式的可以用浏览器的返回按钮返回上一层，而重定向是不行的
   this.props.history.push('...')

5. 路由嵌套
   