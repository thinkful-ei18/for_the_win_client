import React, { Component } from 'react';

import './input.css'


export default class Input extends Component {

  render() {
 
    console.log('INPUT PROPS: ', this.props);

    const Element = this.props.element || 'input';

    return (
      <div className={this.props.className} >
        <Element 
          {...this.props.input}
          id={this.props.id}
          type={this.props.type}
          placeholder={this.props.placeholder}
          ref={input => (this.input = input)}
        >
        </Element>
      </div>
    );
  }
}
