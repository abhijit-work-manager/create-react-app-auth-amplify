import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import AddProject from './project/AddProject';
import Task from './task/Task';
import Menu from './menu/Menu';


class Application extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			displayAddProject: true,
			displayTask:false,
		};
	}
	
	handleMenuClick(clickValue){
		this.setState({
			displayAddProject: clickValue == 'Add Project'? true : false,
			displayTask: clickValue == 'Task'? true : false ,
		}
		});
	}
	
	render(){
		let display;
		if(this.state.displayAddProject){
			display = <AddProject/>;
		}else if (this.state.displayTask){
			display = <Task/>;
		}
		
		return (
			<div className="container">
				<header className="App-header"> App Header </header>
				<Menu handler={(clickValue) => this.handleMenuClick(clickValue)} />
				<div className="content">
					{display}
				</div>
			</div>
		);
	}
}