import "./App.css";
import Header from "./Components/Header";
import AddNote from "./Components/AddNote";
import Note from "./Components/Note";
import { useContext } from "react";
import { DataContext } from "./Context/DataProvider";

function App() {
  const { notes, addNote, deleteNote } = useContext(DataContext);

  return (
    <div>
      <Header />
      <AddNote />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          notes={note.notes}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}

export default App;
