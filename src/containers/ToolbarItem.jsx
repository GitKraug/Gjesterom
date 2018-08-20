import React from 'react';
import './../styles/ToolbarItem.css';

export default class ToolbarItem extends React.Component {
  render() {
    return (
			<div className="ToolbarItem">
        <p className="ToolbarItemText" onClick={() => this.props.byttSide(this.props.side)}>{this.props.txt}</p>
      </div>
		)
  }
}
