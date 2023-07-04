import React, { useContext } from "react";
import { DataContext } from "../Context/DataProvider";

function Note({ title, notes, id }) {
  const { deleteNote } = useContext(DataContext);

  const handleDelete = () => {
    deleteNote(id);
  };

  return (
    <div className="note">
      <h1>{title}</h1>
      <hr></hr>
      <p>{notes}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Note;
