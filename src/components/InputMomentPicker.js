import React, { Component } from 'react';
import moment from 'moment';
import InputMoment from 'input-moment';

import './inputMomentPicker.css';

export default class InputMomentPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      m: moment()
    }
  }

  handleChange = m => {
    this.setState({ m })
  };

  handleSave = () => {
    console.log('saved', this.state.m.format('llll'));
  };  

  render() {

    return(
      <form>
          <div className="input">
            <input type="text" value={this.state.m.format('llll')} readOnly />
          </div>
          <InputMoment
            moment={this.state.m}
            onChange={this.handleChange}
            onSave={this.handleSave}
            minStep={5}
          />
      </form>
    )
  }

};

/*
Resources:
 - https://github.com/wangzuo/input-moment
*/