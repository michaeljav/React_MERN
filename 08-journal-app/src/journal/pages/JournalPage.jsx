import { AddOutlined, MailOutline } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import React from 'react';
import { JournalLayout } from '../../auth/layout/JournalLayout';
import { NothingSelectedView } from '../views/NothingSelectedView';
import { NoteView } from '../views/NoteView';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda
        vel quo corrupti ducimus, repellendus qui eos quasi natus perferendis
        saepe debitis ad maxime facere totam ab numquam labore possimus.
      </Typography> */}
      {/* Nothingselected */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

      {/* noteview */}
    </JournalLayout>
  );
};
