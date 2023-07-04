import React, { useState, useContext } from "react";
import "../App.css";
import { DataContext } from "../Context/DataProvider";
import { v4 as uuidv4 } from "uuid";

function AddNote() {
  const { addNote } = useContext(DataContext);

  const [note, setNote] = useState({
    id: "",
    title: "",
    notes: "",
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submit(event) {
    event.preventDefault();
    const newNote = {
      ...note,
      id: uuidv4(),
    };
    addNote(newNote);
    setNote({
      id: "",
      title: "",
      notes: "",
    });
  }

  function handelExpanded() {
    setExpanded(true);
  }

  return (
    <div>
      <form>
        {isExpanded && (
          <input
            type="text"
            value={note.title}
            onChange={handleChange}
            name="title"
            placeholder="Title"
          />
        )}
        <p>
          <textarea
            name="notes"
            placeholder="Take a note..."
            value={note.notes}
            onChange={handleChange}
            onClick={handelExpanded}
            rows={isExpanded ? 3 : 1}
          ></textarea>
        </p>
        <button onClick={submit}>ADD</button>
      </form>
    </div>
  );
}

export default AddNote;
