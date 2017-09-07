import React, { Component } from 'react';
// import './App.css';
import uuid from 'uuid';
import ProjectItem from './ProjectItem'

class AddProject extends Component {

  constructor() {
    super()
    this.state = {
      newProject:{}
    }
  }
  static defaultProps ={
    categories: ['Web Design', 'Technology Education', 'Web Game Design']
  }
  handleSubmit(e) {   //e = event
    if(this.refs.title.value === ''){
      alert('Title is required')
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        //console.log(this.state)
        this.props.addProject(this.state.newProject)
      });
    }
    e.preventDefault()
  }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div><br />
            <label>category</label><br />
              <select ref="category">
                {categoryOptions}
              </select>
          </div><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
