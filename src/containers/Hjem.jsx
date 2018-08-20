import React from 'react';
import './../styles/Hjem.css';
import GjesteromHeaderSection from './../containers/GjesteromHeaderSection'

export default class Hjem extends React.Component {
	constructor(props) {
    super(props);
    this.state = {

    };
	}

  render() {
    return (
			<div className="HjemContainer">
				<GjesteromHeaderSection />
        <p>Hjem</p>
			</div>
		)
  }
}
