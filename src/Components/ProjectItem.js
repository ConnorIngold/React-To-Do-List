import React, { Component } from 'react';

class ProjectsItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Project">
      <strong>  {this.props.project.title} </strong>: {this.props.project.catergory} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)} >X</a>
      </li>
    );
  }
}



export default ProjectsItem;
