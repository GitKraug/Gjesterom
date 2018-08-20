import React from 'react';
import './../styles/Gjesterom.css';
import Gjesteboka from './Gjesteboka'
import Hjem from './../containers/Hjem'
import Booking from './Booking'

export default class Gjesterom extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
			hjem: false,
			gjesteboka: false,
			booking: true
    };
	}

  render() {
    return (
			<div className="GjesteromContainer">
				{this.state.hjem && <Hjem />}
				{this.state.gjesteboka && <Gjesteboka />}
				{this.state.booking && <Booking />}
			</div>
		)
  }
}
