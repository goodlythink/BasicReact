import React, { Component } from 'react';
import LikeButton from './LikeButton'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { likeMe: 0 }
    console.log('App constructor')
  }

  componentWillMount() {
    console.log('App componentWillMount')
  }

  componentDidMount() {
    console.log('App componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('App componentWillReceiveProps')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App shouldComponentUpdate')
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('App componentWillUpdate')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('App componentWillUnmount')
  }

  render() {
    console.log('App render')
    return (
      <div className="App">
        <h1>LifeCycle</h1>
        <h4>Like: {this.state.likeMe}</h4>
        <LikeButton onClickLike={this.handleClick} />
      </div>
    );
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        likeMe: prevState.likeMe + 1
      }
    })
  }
  
}

export default App;
