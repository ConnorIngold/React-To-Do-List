import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }


  static defaultProps = {
    catergories: ['Web Design', 'Web Devlopemnt', 'Moblie Developemnt']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('The title cant be empty... you mug');
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        catergory: this.refs.catergory.value
      }}, function(){
        // console.log(this.state)
        this.props.addProject(this.state.newProject)
      });
    }
    e.preventDefault();
  }

	render() {
    let catergoryOptions = this.props.catergories.map(catergory => {
      return <option key ={catergory} value={catergory}>{catergory}</option>
    });
		return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>Title</label><br />
              <input type="text" ref="title" />
            </div>
            <br />
            <div>
              <label>Catergory</label><br />
              <select ref="catergory">
                {catergoryOptions}
              </select>
            </div>
            <br />
            <input type="submit" value="Submit" />
          </form>
      </div>
    )
	}
}

export default AddProject;
