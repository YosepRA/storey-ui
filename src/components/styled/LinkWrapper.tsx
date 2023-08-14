import Link from 'next/link';
import { styled } from '@mui/material/styles';

const LinkWrapper = styled(Link)(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  '&:not(:last-child)': {
    marginBottom: theme.spacing(2),
  },
}));

export default LinkWrapper;
