import React, { PureComponent } from 'react';
import './Home.css';
import TabBar from '../../component/tabBar/tabBar';
import { Form, Input, Col } from 'antd'
const FormItem = Form.Item;
const propsNew = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
@Form.create()
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
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <TabBar/>
        <Form>
          <FormItem
            { ...propsNew }
          label='姓名'>
            <Col>
              {getFieldDecorator('oldPassword',
                {
                  rules: [
                    { required: true, message: '请输入旧密码' },
                    { min: 8, message: '密码长度过短' },
                    { max: 16, message: '密码长度过长' },
                  ]
                }
              )(
                <Input style={{width: '41.6%'}} type="password" />
              )}
            </Col>
          </FormItem>
        </Form>
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
