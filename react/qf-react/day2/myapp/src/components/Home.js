import React, { Component } from 'react';
// import axios from 'axios'

class Home extends Component {
  componentDidMount() {
    console.log(this.props.location.query.name)
  }
  constructor(props) {
    super(props)
    this.state = {
      arr:[]
    }
  }
  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}

export default Home;