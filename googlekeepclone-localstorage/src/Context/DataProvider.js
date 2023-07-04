import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

const DataProvider = (props) => {
  const [notes, setNotes] = useState([]);

  // Load data from local storage on component mount
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save data to local storage whenever notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <DataContext.Provider value={{ notes, addNote, deleteNote }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
