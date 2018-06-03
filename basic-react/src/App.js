import React, { Component } from 'react';
import Header from './Header'

class App extends Component {
  /*
  constructor(props) {
    super(props)

    this.state = { likeMe: 0 }
    // this.handleClick = this.handleClick.bind(this)
  }
  */
  state = { likeMe: 0 }

  render() {
    //Spread
    let obj1 = { a: 1, b: 2 }
    let obj2 = { c: 3, d: 4 }
    let objRet = { ...obj1, ...obj2 }
    console.log(objRet)

    //Destucturing
    const order = {
      userId: '1',
      productCode: '003',
      product: {
        name: 'Notebook',
        price: '25,000'
      }
    }

    const { userId, productCode, product: { name, price } } = order
    console.log(name)
    
    // console.log(order.product.name)
    const mytitle = "OK React"
    return (
      <div className="App">
        <Header title={`${mytitle} Yes`} />
        {/* <button onClick={this.handleClick.bind(this)}>Click Me</button> */}
        {/* <button onClick={this.handleClick}>Click Me</button> */}
        {/* <button onClick={()=>this.handleClick()}>Click Me</button> */}
        {/* <button onClick={this.handleClick}>Click Me</button> */}
        <button onClick={() => this.handleClick('hello', 'dog', 'cat', 'yellow')}>Click Me</button>
      </div>
    );
  }

  handleClick = (val, ...other) => {
    //alert(this.state.likeMe)
    //alert(val)
    console.log('sample=>', this.state.likeMe, val, other)
  }
}

export default App;
