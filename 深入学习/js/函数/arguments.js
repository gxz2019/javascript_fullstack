//arguments关键字。。保存函数的参数

function foo(...x) {
  console.log('x = ' + x); // 10
  for (var i=0; i<arguments.length; i++) {
      console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
  } 
}    
// foo(10, 20, 30);a
class a extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      a = '1',
      b = '2'
     }
  }
  render() { 
    return ( <div>11
      <div><p>2222</p></div>
    </div> );
  }
}
 
export default a;