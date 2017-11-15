import React, { PureComponent } from 'react';
import './Home.css';
import TabBar from '../../component/tabBar/tabBar'

export default class Test extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      test: 'hello world!',
      arrayTest: ['qwerw', '23rewrew', '2342432', '23ewrewr']
    }
  }
  static defaultProps = {
    ttt: 123
  };
  handlerClick() {
    this.setState({
      test: '0000'
    })
  }
  renderList() {
    return this.state.arrayTest.map((item, i) => {
      return (
        <li key={i}>{i}:{item}</li>
      )
    })
  }
  pushItem() {
    this.setState({
      arrayTest: this.state.arrayTest.splice(0, 1)
    })
  }
  render() {
    console.log('Home');
    return (
      <div>
        <TabBar/>
        <div className="App">
          <p className="App-intro" onClick={() => { this.handlerClick() }}>
            {this.state.test}{this.props.ttt}
          </p>
          <ul onClick={() => { this.pushItem() }} style={{border: 'red 1px solid'}}>
            {this.renderList()}
          </ul>
          <T1 test="000"/>
        </div>
      </div>
    );
  }
}
class T1 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      a: 'aa'
    }
  }
  render() {
    console.log('T1');
    return (
      <T2 test={this.props.test + this.state.a}/>
    )
  }
}

class T2 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      a: 'aa'
    }
  }
  render() {
    console.log('T2');
    return (
      <div>{this.props.test}{this.state.a}</div>
    )
  }
}
