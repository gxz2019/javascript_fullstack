import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr:[]
    }
  }
  componentDidMount() {
    this.request()
  }
  request() {
    axios.get('/api/101320101.html').then((res) => {console.log(res)})
  }
  render() {
    return (
      <div>
    
      </div>
    );
  }
}

export default Home;