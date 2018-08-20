import React from 'react';
import './../styles/Toolbar.css';
import ToolbarItem from './ToolbarItem'

export default class Toolbar extends React.Component {
  render() {
    return (
			<div className="Toolbar">
        <ToolbarItem txt={"Hjem"} />
        <ToolbarItem txt={"Gjesteboka"} />
        <ToolbarItem txt={"Booking"} />
      </div>
		)
  }
}
