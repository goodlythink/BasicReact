import React, { Component } from 'react';

class App extends Component {
  // txtCode = React.createRef()

  componentDidMount(){
    // this.txtInput.focus()
      this.txtCode.current.focus()
  }

  render() {
    return (
      <div className="App">
        <h1>Ref And Form</h1>
        <p><input type="text" ref={(input) => this.txtInput = input} /></p>
        <p><input type="text" ref={this.txtCode}/></p>
      </div>
    );
  }
}

export default App;
