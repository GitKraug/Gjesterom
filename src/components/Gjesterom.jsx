import React from 'react';
import './../styles/Gjesterom.css';
import GjesteromHeaderSection from './../containers/GjesteromHeaderSection'

export default class Gjesterom extends React.Component {
	constructor(props) {
    super(props);
    this.state = {

    };
	}

  render() {
    return (
			<div className="GjesteromContainer">
				<GjesteromHeaderSection />
			</div>
		)
  }
}
