import React from 'react';
import './../styles/Hjem.css';
import GjesteromHeaderSection from './../containers/GjesteromHeaderSection'

export default class Hjem extends React.Component {
  render() {
    return (
			<div className="HjemContainer">
				<GjesteromHeaderSection byttSide={(nesteSide) => this.props.byttSide(nesteSide)} />
        <p>Hjem</p>
			</div>
		)
  }
}
