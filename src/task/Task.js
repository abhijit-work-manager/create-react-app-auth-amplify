import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class Task extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			description: null,
			status: null,
			startDate: new Date(),
		};
	}
	
	handFormChange(){

	}
	
	render(){
		return (
			<div className="container">
				<label>
					Description : 
					<textarea value={this.state.description} onChange={this.handleFormChange} />
				</label><br/>
				<input type="submit" value="Submit" />
			</div>
		);
	}
}

export default Task;