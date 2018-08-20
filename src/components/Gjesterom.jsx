import React from 'react';
import './../styles/Gjesterom.css';
import GjesteromBanner from './../containers/GjesteromBanner'
import Toolbar from './../containers/Toolbar'

export default class Gjesterom extends React.Component {
	constructor(props) {
    super(props);
    this.state = {

    };
	}

  render() {
    return (
			<div className="GjesteromContainer">
				<Toolbar />
				<GjesteromBanner />
			</div>
		)
  }
}
