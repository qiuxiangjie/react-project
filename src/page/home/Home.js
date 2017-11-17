import React, { PureComponent } from 'react';
import './Home.css';
import TabBar from '../../component/tabBar/tabBar';
import LoanCard from './LoanCard';

export default  class Home extends PureComponent {
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
  renderList() {
    return this.state.arrayTest.map((item, i) => {
      return (
        <LoanCard
          til={item}
          key={'loanCard' + i}
        />
      )
    })
  }
  render() {
    return (
      <div>
        <TabBar/>
        { this.renderList() }
      </div>
    );
  }
}


