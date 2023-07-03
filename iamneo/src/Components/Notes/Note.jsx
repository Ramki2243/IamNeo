import React, { useState, useContext } from 'react';

import { Card, CardActions, CardContent, IconButton, Typography, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ArchiveOutlined, DeleteOutlineOutlined } from '@mui/icons-material';

import { DataContext } from '../../Context/DataProvider';

const NoteCard = styled(Card)`
    box-shadow: none;
    border: 3px solid white;
    border-radius: 8px;
    color: white;
    background-color: rgb(40,40,50);
    &:hover {
        box-shadow: 0 2px 4px 0 green, 0 2px 6px 2px darkgreen;
    }
`;

const Note = ({ note }) => {

    const [showActions, setShowActions] = useState(false);

    const { notes, setNotes, setArchivedNotes, setDeletedNotes } = useContext(DataContext);

    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setArchivedNotes(prevArr => [...prevArr, note]);
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeletedNotes(prevArr => [...prevArr, note]);
    }

    return (
      <NoteCard
        onMouseEnter={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
      >
        <CardContent sx={{ wordWrap: "break-word" }}>
          <Typography>{note.title}</Typography>
          <Typography>{note.text}</Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", marginLeft: "auto" }}
        >
          <Tooltip title="Archive">
            <IconButton
              sx={{
                visibility: showActions ? "visible" : "hidden",
                color: showActions ? "#ffffff" : "#000000", // Set the color conditionally
              }}
              onClick={() => archiveNote(note)}
            >
              <ArchiveOutlined fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton
              sx={{
                visibility: showActions ? "visible" : "hidden",
                color: showActions ? "#ffffff" : "#000000", // Set the color conditionally
              }}
              onClick={() => deleteNote(note)}
            >
              <DeleteOutlineOutlined fontSize="small" />
            </IconButton>
          </Tooltip>
        </CardActions>
      </NoteCard>
    );
}

export default Note;