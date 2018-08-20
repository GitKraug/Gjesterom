import React from 'react';
import './../styles/Booking.css';
import GjesteromHeaderSection from './../containers/GjesteromHeaderSection'

export default class Booking extends React.Component {
	constructor(props) {
    super(props);
    this.state = {

    };
	}

  render() {
    return (
			<div className="BookingContainer">
				<GjesteromHeaderSection byttSide={(nesteSide) => this.props.byttSide(nesteSide)} />
        <p>Booking</p>
			</div>
		)
  }
}
