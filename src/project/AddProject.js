import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class AddProject extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			title: null,
			description: null,
			startDate: null,
			endDate: null,
			projectId: null,
		};
	}
	
	handFormChange(){

	}
	
	render(){
		return (
			<div className="container">
				<label>
					Title : 
					<textarea value={this.state.title} onChange={this.handleFormChange} />
				</label><br/>
				<label>
					Description : 
					<textarea value={this.state.description} onChange={this.handleFormChange} />
				</label><br/>				
				<label>
					Start Date : 
					<textarea value={this.state.startDate} onChange={this.handleFormChange} />
				</label><br/>				
				<label>
					End Date : 
					<textarea value={this.state.endDate} onChange={this.handleFormChange} />
				</label><br/>								
				<input type="submit" value="Submit" />
			</div>
		);
	}
}

export default AddProject;