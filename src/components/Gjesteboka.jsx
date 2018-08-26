import React from 'react';
import './../styles/Gjesteboka.css';
import GjesteromHeaderSection from './../containers/GjesteromHeaderSection';
import Scrollbox from './../containers/Scrollbox';
import SkrivInnlegg from './SkrivInnlegg';
import axios from 'axios';

export default class Gjesteboka extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      innlegg : []
    };
	}

  componentDidMount() {
    axios.get('https://gjestebok-ca87.restdb.io/rest/innlegg',
      {
        headers: {'x-apikey': '5b7bd6a219af4a22fafd4887'},
        responseType: 'json',
      }
    ).then(response => {this.setState({ innlegg: response.data})});
  }

  onPostInnlegg() {
    axios.post('https://gjestebok-ca87.restdb.io/rest/innlegg',
      {
        headers: {'x-apikey': '5b7bd6a219af4a22fafd4887'},
        responseType: 'json',
        body: {
          dato: "dato",
          navn: "Stine",
          innlegg: "innlegg"
        }
      },

    )//.then(response => {this.setState({ innlegg: response.data})});
  }

  render() {
    this.onPostInnlegg()
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
