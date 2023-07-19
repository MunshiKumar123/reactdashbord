import { Stack } from '@mui/material';
import { Box, styled } from '@mui/material';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const List = () => {
  return (
    <Container>
      <Box className="mb-sm-30">
       <h1>hloo</h1>
        </Box>
    </Container>
  );
};

export default List;
