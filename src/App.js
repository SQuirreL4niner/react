import React, { Component } from 'react';
// import './App.css';
import uuid from 'uuid';
import $ from 'jquery';

import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Todos from './components/Todos'

class App extends Component {

  constructor() {
    super()
    this.state = {
      projects: [],
      todos:[]
    }
  }

  getTodos(){
    $.ajax({
      url:'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache:false,
      success: function(data){
        this.setState({todos:data}, function(){
          console.log(this.state)
        })
      }.bind(this),
        error:function(xhr, status, err){
          console.log(err)
        }
    })
  }

  getProjects(){
    this.setState({projects: [
      {
        id:uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id:uuid.v4(),
        title: 'Prototype Website',
        category: 'Technology Education'
      },
      {
        id:uuid.v4(),
        title: 'Game Website',
        category: 'Web Game Design'
      }
    ]})
  }

  componentWillMount() {
    this.getProjects()
    this.getTodos()

  }

  componentDidMount() {
    this.getTodos()
  }

  handleAddProject(project){
    let projects = this.state.projects
    projects.push(project)
    this.setState({projects:projects})
  }

  handleDeleteProject(id){
    let projects = this.state.projects
    let index = projects.findIndex(x => x.id === id)
    projects.splice(index, 1)
    this.setState({projects:projects})
  }

  render() {
    return (
      <div className="App">
        <AddProject addProjectEvent={this.handleAddProject.bind(this)}/>
        <Projects projectsState={this.state.projects}
        onDeleteEvent={this.handleDeleteProject.bind(this)}/>
        <hr />
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
