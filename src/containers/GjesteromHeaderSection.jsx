import React from 'react';
import './../styles/GjesteromHeaderSection.css';
import GjesteromBanner from './GjesteromBanner'
import Toolbar from './Toolbar'

export default class GjesteromHeaderSection extends React.Component {
	constructor(props) {
    super(props);
    this.state = {

    };
	}

  render() {
    return (
			<div className="GjesteromHeaderSectionContainer">
				<Toolbar />
				<GjesteromBanner />
			</div>
		)
  }
}
