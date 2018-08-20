import React from 'react';
import './../styles/Gjesteboka.css';
import GjesteromHeaderSection from './../containers/GjesteromHeaderSection'

export default class Gjesteboka extends React.Component {
	constructor(props) {
    super(props);
    this.state = {

    };
	}

  render() {
    return (
			<div className="GjestebokaContainer">
				<GjesteromHeaderSection />
			</div>
		)
  }
}
