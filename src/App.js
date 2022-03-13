import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { TransitionArray } from './components';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { keyframes } from '@mui/system';


const kevinArray = [
  {
    fig: 'K',
    op: { range: [0.6, 0.85], output: [0, 1] },
    trans: { range: [0.6, 0.85], output: [-40, 0], extrapolate: 'clamp' },
  },
  {
    fig: 'E',
    op: { range: [0.25, 0.5], output: [0, 1] },
    trans: { range: [0.25, 0.5], output: [-40, 0], extrapolate: 'clamp' },
  },
  {
    fig: 'V',
    op: { range: [0.0, 0.25], output: [0, 1] },
    trans: { range: [0.0, 0.25], output: [-40, 0], extrapolate: 'clamp' },
  },
  {
    fig: 'I',
    op: { range: [0.5, 0.75], output: [0, 1] },
    trans: { range: [0.5, 0.75], output: [-40, 0], extrapolate: 'clamp' },
  },
  {
    fig: 'N',
    op: { range: [0.15, 0.4], output: [0, 1] },
    trans: { range: [0.15, 0.4], output: [-40, 0], extrapolate: 'clamp' },
  },
];

const ngoArray = [
  {
    fig: 'N',
    op: { range: [0.25, 0.5], output: [0, 1] },
    trans: { range: [0.25, 0.5], output: [-40, 0], extrapolate: 'clamp' },
  },
  {
    fig: 'G',
    op: { range: [0.0, 0.25], output: [0, 1] },
    trans: { range: [0.0, 0.25], output: [-40, 0], extrapolate: 'clamp' },
  },
  {
    fig: 'O',
    op: { range: [0.5, 0.75], output: [0, 1] },
    trans: { range: [0.5, 0.75], output: [-40, 0], extrapolate: 'clamp' },
  },
];

const centerDiv = { width: '100%', display: 'flex', justifyContent: 'center' };

const App = () => {
  return (
    <Container>
      {/* Title animation */}

      <Box sx={{
        fontSize: {
          lg: 200,
          md: 200,
          sm: 180,
          xs: 100
        },
        color: '#FFA500', flexWrap: 'wrap', fontWeight: 900, ...centerDiv
      }}>
        {/* "Kevin" */}
        <Box sx={{ display: 'flex-item' }}>
          <TransitionArray transitionArray={kevinArray} />
        </Box>

        {/* Space separator */}
        <Box sx={{ color: '#1B9AAA', display: 'flex-item' }}>
          &nbsp;
          </Box>

        {/* <Box sx={{ height: 0, flexBasis: '100%', display: 'flex-item' }} /> */}

        {/* "Ngo" */}
        <Box sx={{ color: '#008DD5', display: 'flex-item' }}>
          <TransitionArray transitionArray={ngoArray} />
        </Box>
      </Box>

      {/* "Coming soon" */}
      <Box sx={{ ...centerDiv }}>
        <Box className="typewriter py-0" sx={{
          color: '#F4FFFD',
          fontSize: {
            lg: 100,
            md: 100,
            sm: 90,
            xs: 50
          }
        }}>
          <span className="typewriter-text">Makeover incoming</span>
        </Box>
      </Box>

      <Box sx={{ ...centerDiv }}>
        <Button href="https://kevinngo.tech" target="_blank" variant="contained" endIcon={<OpenInNewIcon />}
          sx={{
            fontSize: {
              lg: 30,
              md: 30,
              sm: 30,
              xs: 30
            },
            bgcolor: '#EF476F',
            '&:hover': {
              bgcolor: '#CF476F'
            }
          }}>
          Current Website
      </Button>
      </Box>
    </Container>
  );
}

export default App;
