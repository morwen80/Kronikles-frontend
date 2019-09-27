import React, {Component} from 'react';
import { connect } from 'react-redux';
import  { addNewKronikle } from '../actions/kronikle_actions';

class NewKronikle extends Component {
  constructor(){
    super()
    this.state = {
      title: "",
      body: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewKronikle(this.state)
    // this.setState({ title: "", body: "" })
    this.props.history.push('/');
  }


  render(){
    return(
      <React.Fragment>
      <h2>Create a new Kronikle</h2>
      <div className="newKronikleForm">

        <form className="newKForm" onSubmit={this.handleSubmit} >
          <input
            placeholder="title"
            value={this.state.title}
            name="title"
            onChange={this.handleChange}
            />

          <textarea
            placeholder="kronikle"
            value={this.state.body}
            name="body"
            onChange={this.handleChange}
            />
          <button type="submit">Create </button>
        </form>
      </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewKronikle: (newKronikle) => dispatch(addNewKronikle(newKronikle))
  }
}

export default connect(null, mapDispatchToProps)(NewKronikle)
