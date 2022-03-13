import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { TransitionArray } from './components';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Typewriter from 'typewriter-effect';

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
  const [show, setShow] = React.useState(false);

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
      <Box sx={{
        ...centerDiv, color: '#F4FFFD', textAlign: 'center',
        fontSize: {
          lg: 100,
          md: 100,
          sm: 90,
          xs: 50
        }
      }}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Makeover incoming')
              .callFunction(() => {
                console.log('String typed out!');
              })
              // .pauseFor(2500)
              // .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted');
                setShow(true);
              })
              .start();
          }}
        />
      </Box>
      {show &&
        <Box sx={{ ...centerDiv, mt: 3 }}>
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
      }
    </Container>
  );
}

export default App;
