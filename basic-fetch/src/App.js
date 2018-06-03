import React, { Component } from 'react';

class App extends Component {
  state = { data: null, err: null }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts?userId=1')
      .then(res=>{
        if(res.ok){
          return res
        }
        throw Error(res.status)
      })
      .then(result => result.json())
      .then(dataResult => this.setState({ data: dataResult }))
      .catch(e => this.setState({ err: e.message }))
  }

  render() {
    const { data, err } = this.state
    let list = <div>Loding...</div>

    if (data) {
      if (data.length > 0) {
        list = data.map(d => {
          return (
            <div key={d.id}>
              <h4>{d.title}</h4>
            </div>
          )
        }
        )
      }else{
        list = <div>No Data</div>
      }
    }

    if(err){
      list = <div>Error: {err}</div>
    }

    return (
      <div className="App">
        <h1>Basic Fetch</h1>
        {list}
      </div>
    );
  }
}

export default App;
