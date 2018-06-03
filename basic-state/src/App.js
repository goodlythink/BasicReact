import React, { Component } from 'react';
import LikeButton from './LikeButton'
import TopMenu from './TopMenu'

class App extends Component {
  state = { likeMe: 0, disLike: 0 }


  render() {
    return (
      <div className="App">
        <TopMenu>
          <ul>
            <li><a>หน้าหลัก</a></li>
            <li><a>สินค้า</a></li>
          </ul>
        </TopMenu>

        <h1>Like: {this.state.likeMe}</h1>
        <h1>DisLike: {this.state.disLike}</h1>

        <LikeButton clickLike={this.handleClick} like={true} />
        <LikeButton clickLike={this.handleClick} />

        {/* <button onClick={this.handleClick}>Like</button> */}
      </div>
    );
  }

  handleClick = (like) => {
    if (like) {
      this.setState((prevState, props) => {
        return {
          likeMe: prevState.likeMe + 1
        }
      })
    } else {
      this.setState((prevState, props) => {
        return {
          disLike: prevState.disLike + 1
        }
      })
    }
  }

}

export default App;
