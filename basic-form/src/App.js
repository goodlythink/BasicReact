import React, { Component } from 'react';

class App extends Component {
  state = {
    code: '',
    name: '',
    category: '2',
    status: true,
    prodType: '0',
  }
  render() {
    return (
      <div className="App">
        <h1>Basic Form</h1>

        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" name="code" value={this.state.code} onChange={this.handleChange} />
          </p>

          <p>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </p>

          <p>
            <select name="category" onChange={this.handleChange} value={this.state.category}>
              <option value='0'>***เลือกประเภท***</option>
              <option value='1'>อาหาร</option>
              <option value='2'>ขนม</option>
              <option value='3'>ของเล่น</option>
            </select>
          </p>

          <p>
            <input type="checkbox" name="status" checked={this.state.status} onChange={this.handleChange} />
          </p>

          <p>
            <input type="radio" 
            name="prodType" 
            value="0" 
            checked={this.state.prodType === "0"} 
            onChange={this.handleChange}/>

            <input type="radio" 
            name="prodType" 
            value="1" 
            checked={this.state.prodType === "1"} 
            onChange={this.handleChange}/>
          </p>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    this.setState({ [name]: value })
    // console.log(this.state.code)
  }

  handleSubmit = (e) => {
    e.preventDefault()

    console.log(this.state)
  }
}

export default App;
