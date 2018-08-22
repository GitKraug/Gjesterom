import React from 'react';
import './../styles/Scrollbox.css';
import Innlegg from './Innlegg';

export default class Scrollbox extends React.Component {
  render() {
    return (
			<div className="ScrollboxContainer">
        {
          this.props.innlegg.map(gjestebokInnlegg => <Innlegg innlegg={gjestebokInnlegg} />)
        }
			</div>
		)
  }
}
