import React, {Component} from 'react'
import { connect } from 'react-redux';
import  { fetchAllNotes } from '../actions/note_actions';
class AllKronikles extends Component {

  componentDidMount = () => {
    this.props.fetchAllNotes()
  }

  render(){

    const notes = this.props.notes.map(note => <div className="notePreview">
    <li>
      {note.title}
      <i className="fas fa-chevron-right"></i>
    </li>
    </div>)

    return(
      <div className="KronikleSpace">
      <ul>
        {notes}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes.notes
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchAllNotes: () => dispatch(fetchAllNotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AllKronikles)
