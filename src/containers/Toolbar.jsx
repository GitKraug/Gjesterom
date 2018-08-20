import React from 'react';
import './../styles/Toolbar.css';
import ToolbarItem from './ToolbarItem'

export default class Toolbar extends React.Component {
  byttSide(nesteSide) {
    this.props.byttSide(nesteSide)
  }

  render() {
    return (
			<div className="Toolbar">
        <ToolbarItem txt={"Hjem"} byttSide={(nesteSide) => this.props.byttSide(nesteSide)} side={"hjem"} />
        <ToolbarItem txt={"Gjesteboka"} byttSide={(nesteSide) => this.props.byttSide(nesteSide)} side={"gjesteboka"} />
        <ToolbarItem txt={"Booking"} byttSide={(nesteSide) => this.props.byttSide(nesteSide)} side={"booking"} />
      </div>
		)
  }
}
