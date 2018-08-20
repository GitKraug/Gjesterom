import React from 'react';
import './../styles/GjesteromBanner.css';

export default class GjesteromBanner extends React.Component {
  render() {
    return (
			<div className="GjesteromBanner">
        <img className="SleepingAnimal" src={require('./../img/logo.png')} alt='logo' />
        <p className="BannerTextHeading">Kraug og Slettvold B&B</p>
      </div>
		)
  }
}
