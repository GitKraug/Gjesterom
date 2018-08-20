import React from 'react';
import './../styles/Slogans.css';

export default class Slogans extends React.Component {
  render() {
    return (
			<div className="SlogansContainer">
        <div className="LeftSlogan">
          <img className="NetworkingPic" src={require('./../img/woman.png')} alt='logo' />
          <p className="LeftSloganText">When the going gets tough, do not rise to occation. Sink to the level of your swiping</p>
        </div>

        <div className="RightSlogan">
          <img className="NetworkingPic" src={require('./../img/mouse.png')} alt='logo' />
          <p className="LeftSloganText">The only easy tap was yesterday</p>
        </div>
      </div>
		)
  }
}
