import "./App.css";
import Header from "./Components/Header";
import AddNote from "./Components/AddNote";
import Note from "./Components/Note";
import { useState } from "react";
function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((preValue) => {
      return [...preValue, newNote];
    });
  }
  function deleteNote(id) {
    setNotes(preValue => {
      return [
        ...preValue.filter((index)=>index !== id)
      ];
    });
}
  
  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          notes={note.notes}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}

export default App;
