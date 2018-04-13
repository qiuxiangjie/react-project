import React, { PureComponent } from 'react';

const PropTypes = require('prop-types');

class Button extends PureComponent {
  render() {
    console.log(this.context);
    return (
      <button style={{background: this.context.color}}>
        {this.props.children}
      </button>
    );
  }
}

Button.contextTypes = {
  color: PropTypes.string,
  text: PropTypes.string
};

class Message extends PureComponent {
  render() {
    console.log(this.context);
    return (
      <div>
        {this.props.text} <Button>{this.context.text}11</Button>
      </div>
    );
  }
}

class MessageList extends PureComponent {
  getChildContext() {
    return {color: "red", text: 'Delete-btn'};
  }

  render() {
    console.log(this.context);
    const children = this.props.messages.map((message) =>
      <Message text={message.text} />
    );
    return <div>{children}</div>;
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string,
  text: PropTypes.string
};

const arg = [
  {text: '123'},
  {text: '342'},
  {text: '12444323'},
];
export default class Context extends PureComponent {
  render() {
    return (
      <div>
        <MessageList messages={arg} />
      </div>
      )
  }
}

