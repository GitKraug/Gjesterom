import React from 'react';
import './../styles/Gjesteboka.css';
import GjesteromHeaderSection from './../containers/GjesteromHeaderSection';
import Scrollbox from './../containers/Scrollbox';
import SkrivInnlegg from './SkrivInnlegg';

export default class Gjesteboka extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      innlegg : [
        {"name": "Steinar", "date": "22.JUNI 2022", "innlegg": "Fint stedawlkdjawjdawjodFint stedawlkdjawjdawjodFint stedawlkdjawjdawjodFint stedawlkdjawjdawjodFint stedawlkdjawjdawjodFint stedawlkdjawjdawjodFint stedawlkdjawjdawjodFint stedawlkdjawjdawjod"},
        {"name": "Steinar2", "date": "20.JUNI 2022", "innlegg": "jdawjodFint stedawlkdjawjdawjodFint stedawlkdjawjdawjodFint stedawlkdjawjdawjodFint stedawlkdjawjdawjod"},
        {"name": "Steinar", "date": "22.JUNI 2022", "innlegg": "Fint sted"},
        {"name": "Steinar2", "date": "20.JUNI 2022", "innlegg": "Fint sted2"},
        {"name": "Steinar", "date": "22.JUNI 2022", "innlegg": "Fint sted"},
        {"name": "Steinar2", "date": "20.JUNI 2022", "innlegg": "Fint sted2"}
      ]
    };
	}

  render() {
    return (
			<div className="GjestebokaContainer">
        <GjesteromHeaderSection byttSide={(nesteSide) => this.props.byttSide(nesteSide)} />
        <p className="GjestebokaHeading">Gjesteboka</p>

        <div className="GjestebokRow">
          <Scrollbox innlegg={this.state.innlegg} />
          <div className="SkrivInnleggColumn">
            <SkrivInnlegg />
          </div>
        </div>
			</div>
		)
  }
}
