import Link from 'next/link';

import { styled } from '@mui/material/styles';

const MenuItem = styled(Link)(({ theme }) => ({
  display: 'block',
  color: theme.palette.common.black,
  '&:not(:last-child)': {
    marginBottom: theme.spacing(1),
  },
}));

export default MenuItem;
