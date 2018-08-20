import React from 'react';
import './../styles/GjesteromHeaderSection.css';
import GjesteromBanner from './GjesteromBanner'
import Toolbar from './Toolbar'

export default class GjesteromHeaderSection extends React.Component {
  render() {
    return (
			<div className="GjesteromHeaderSectionContainer">
				<Toolbar />
				<GjesteromBanner />
			</div>
		)
  }
}
