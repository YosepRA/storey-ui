import { styled } from '@mui/material/styles';

const CardTag = styled('div')(({ theme }) => ({
  display: 'inline-block',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
}));

export default CardTag;
