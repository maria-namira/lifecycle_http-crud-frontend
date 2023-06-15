import './NoteList.scss'
import NoteItem from "./NoteItem/NoteItem";
import PropTypes from "prop-types";

export default function NotesList(props) {
  const { notes, deleteHandler } = props;

  return (
    <ul className="app__notes-list">
      {notes.map((note) => <NoteItem key={note.id} note={note} deleteHandler={deleteHandler} />)}
    </ul>
  )
}

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  deleteHandler: PropTypes.func.isRequired
}