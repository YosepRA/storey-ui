import React from 'react';
import Typography from '@mui/material/Typography';

import type { NoteEditProps } from 'types/notes.d.ts';

const NoteEdit = function NoteEditComponent({ params: { id } }: NoteEditProps) {
  return (
    <Typography variant="h4" component="h1">
      NoteEdit {id}
    </Typography>
  );
};

export default NoteEdit;
