import React from 'react';
import './../styles/Innlegg.css';

export default class Innlegg extends React.Component {
  render() {
    return (
			<div className="InnleggContainer">
        <p className="InnleggTextHeading">{this.props.innlegg.name}, {this.props.innlegg.date}</p>
        <div className="InnleggTextLine"></div>
        <p className="InnleggText"> {this.props.innlegg.innlegg} </p>
			</div>
		)
  }
}
