import React from 'react';
import Typography from '@mui/material/Typography';

import type { NoteDetailsProps } from 'types/notes.d.ts';

const NoteDetails = function NoteDetailsComponent({
  params: { id },
}: NoteDetailsProps) {
  return (
    <Typography variant="h4" component="h1">
      NoteDetails {id}
    </Typography>
  );
};

export default NoteDetails;
