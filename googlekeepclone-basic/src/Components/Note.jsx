import React from "react";

function Note({ title, notes, onDelete, id }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <hr></hr>
      <p>{notes} </p>
      <button onclick={() => onDelete(id)}> Delete </button>
    </div>
  );
}

export default Note;
