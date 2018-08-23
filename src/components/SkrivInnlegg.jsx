import React from 'react';
import './../styles/SkrivInnlegg.css';

export default class SkrivInnlegg extends React.Component {
	constructor(props) {
    super(props);

    this.handleNameEntered = this.handleNameEntered.bind(this);
    this.state = {
      name: "",
      innlegg: ""
    };
	}

  handleNameEntered(event) {
    this.setState({
      name: event.target.value,
      innlegg: this.state.innlegg
    })
  }

  handleInnleggEntered(event) {
    this.setState({
      name: this.state.name,
      innlegg: event.target.value
    })
  }

  render() {
    return (
			<div className="SkrivInnleggContainer">
        <input className="NameInput" placeholder={"Navn"} onChange={this.handleNameEntered} ref={"NameInputField"} autoFocus />
        <textarea className="InnleggInput" placeholder={"Fortell om din opplevelse"} onChange={this.handleNameInnlegg} ref={"InleggInputField"} autoFocus />
			</div>
		)
  }
}
