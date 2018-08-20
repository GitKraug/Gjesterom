import React from 'react';
import './../styles/Gjesterom.css';
import Gjesteboka from './Gjesteboka'
import Hjem from './../containers/Hjem'
import Booking from './Booking'

export default class Gjesterom extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
			hjem: true,
			gjesteboka: false,
			booking: false
    };
	}

	toggleView(view) {
      this.setState({
				hjem: view === 'hjem',
				gjesteboka: view === 'gjesteboka',
				booking: view === 'booking'
      });
    }

  render() {
    return (
			<div className="GjesteromContainer">
				{this.state.hjem && <Hjem byttSide={(nesteSide) => this.toggleView(nesteSide)} />}
				{this.state.gjesteboka && <Gjesteboka byttSide={(nesteSide) => this.toggleView(nesteSide)} />}
				{this.state.booking && <Booking byttSide={(nesteSide) => this.toggleView(nesteSide)} />}
			</div>
		)
  }
}
