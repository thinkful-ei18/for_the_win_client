import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import InputMoment from 'input-moment';
import { setDraftSchedule } from '../actions/leagueActions';
import { findUsersLeague } from '../localStorage';

import '../styles/inputMomentPicker.css';

export class InputMomentPicker extends Component {
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
    const leagueName = (findUsersLeague()).leagueName;
    this.props.dispatch(setDraftSchedule(leagueName, new Date(this.state.m.format('llll'))))
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
            minStep={1}
          />
      </form>
    )
  }

};


export default connect()(InputMomentPicker)

/*
Resources:
 - https://github.com/wangzuo/input-moment
*/