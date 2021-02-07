import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class Menu extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			displayProject: true,
			displayTask: false,
		};
	}
	
	
	render(){
		return (
			<div className="menu-bar">
				<input type="submit" value="Add Project" onClick={() => this.props.handler('Add Project')} />
				<input type="submit" value="Task" onClick={() => this.props.handler('Task')} />

			</div>
		);
	}
}

export default Menu;