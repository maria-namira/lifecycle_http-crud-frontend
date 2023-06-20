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
    try{
      const response = await fetch(`${this.url}/notes`);

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
  } catch(error){
    console.log(error)
  }
}

  async deleteNote(id) {
    try{
    await fetch(`${this.url}/notes/${id}`, {
      method: 'DELETE'
    });
    this.updateNotes();
  } catch (error) {
    console.log(error);
  }
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
