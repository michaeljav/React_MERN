import { AddOutlined, MailOutline } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import React from 'react';
import { JournalLayout } from '../../auth/layout/JournalLayout';
import { NothingSelectedView } from '../views/NothingSelectedView';
import { NoteView } from '../views/NoteView';
import { startNewNote } from '../../store/journal';

import { useDispatch, useSelector } from 'react-redux';

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.journal);
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {
        // si tenemos una note activa mostramos
        !!active ? <NoteView /> : <NothingSelectedView />
      }

      <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
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
