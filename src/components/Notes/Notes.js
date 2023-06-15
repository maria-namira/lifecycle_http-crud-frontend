import React from "react";
import AddForm from "../AddForm/AddForm";
import NotesList from "../NoteList/NoteList";
import TitleBox from "../TitleBox/TitleBox";

export default class Notes extends React.Component {
  constructor() {
    super();
    this.state = { notes: [] };
    this.url = 'https://fathomless-shore-15824.herokuapp.com';
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNotes = this.updateNotes.bind(this)
  }

  componentDidMount() {
    this.updateNotes();
  }

  async updateNotes() {
    const request = await fetch(`${this.url}/notes`);
    const response = await request.json();
    this.setState({ notes: response })
  }

  async addNote(content) {
    await fetch(`${this.url}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content })
    });
    this.updateNotes();
  }

  async deleteNote(id) {
    await fetch(`${this.url}/notes/${id}`, {
      method: 'DELETE'
    });
    this.updateNotes();
  }

  render() {
    return (
      <div className="app">
        <TitleBox updateHandler={this.updateNotes} />
        <NotesList deleteHandler={this.deleteNote} notes={this.state.notes} />
        <AddForm handleAdd={this.addNote} />
      </div>
    )
  }
}