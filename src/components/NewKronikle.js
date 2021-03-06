import React, {Component} from 'react';
import { connect } from 'react-redux';
import  { addNewKronikle } from '../actions/kronikle_actions';
import TextareaAutosize from 'react-autosize-textarea';

class NewKronikle extends Component {
  constructor(){
    super()
    this.state = {
      title: "",
      body: ""
    }
  }

  handleChange = (e) => {
    if(this.state.title.length < 1) {
      this.setState({ title: "No Title"})
    }

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewKronikle(this.state)
    this.props.history.push('/');
  }

  render(){
    return(
      <div className="newKronikle">
      <h2>Create a new Kronikle</h2>

      <form className="newKForm" onSubmit={this.handleSubmit} >
        <input
          placeholder="Title"
          value={this.state.title}
          name="title"
          onChange={this.handleChange}
          />
        <div className="formBody">
        <TextareaAutosize
          id="newKBodyTextArea"
          style={{ minHeight: 20, maxHeight: 280 }}
          placeholder="Kronikle"
          value={this.state.body}
          name="body"
          onChange={this.handleChange}
          />
          </div>
        <button type="submit" disabled={!this.state.title}>Create </button>
      </form>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewKronikle: (newKronikle) => dispatch(addNewKronikle(newKronikle))
  }
}

export default connect(null, mapDispatchToProps)(NewKronikle)
