import React, { useState } from "react";
import "../App.css";


function AddNote({ onAdd }) {
    
    
  const [note, setNote] = useState({
    title: "",
    notes: "",
  });
    
    
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  function submit(event) {
    event.preventDefault();
    setNote({
      title: "",
      notes: "",
    });
    onAdd(note);
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
