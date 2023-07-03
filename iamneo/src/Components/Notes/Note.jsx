import React, { useState, useContext } from 'react';

import { Card,  CardContent,  Typography,  } from '@mui/material';
import { styled } from '@mui/material/styles';



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

    
  


    return (
      <NoteCard
        onMouseEnter={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
      >
        <CardContent sx={{ wordWrap: "break-word" }}>
          <Typography>{note.title}</Typography>
          <Typography>{note.text}</Typography>
        </CardContent>
        
      </NoteCard>
    );
}

export default Note;