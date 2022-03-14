import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { TransitionArray, InfoTree } from './components';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useChain, useSpringRef } from 'react-spring';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

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

const thachArray = [
  {
    fig: 'T',
    op: { range: [0.35, 0.6], output: [0, 1] },
    trans: { range: [0.35, 0.6], output: [-40, 0], extrapolate: 'clamp' },
  }
]

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
  const [showFooter, setShowFooter] = React.useState(true);

  // Build a spring and catch its ref
  const kevinRef = useSpringRef();
  // Build a transition and catch its ref
  const infoRef = useSpringRef();

  // First run the spring, when it concludes run the transition
  useChain([kevinRef, infoRef], [0, 1]);

  return (
    <>
      <Container maxWidth='2400px' sx={{mb: 5}}>
        {/* Title animation */}
        <Box sx={{
          fontSize: {
            lg: 180,
            md: 160,
            sm: 140,
            xs: 100
          },
          color: '#FFA400', flexWrap: 'wrap', fontWeight: 900, display: 'flex', fontFamily: 'Poppins'
          /* ...centerDiv */ /* WebkitTextStroke: '2px #F4FFFD' */
        }}>
          {/* "Kevin" */}
          <Box sx={{ display: 'flex-item', mb: -10 }}>
            <TransitionArray transitionArray={kevinArray} aniRef={kevinRef} />
          </Box>

          {/* Space separator */}
          <Box sx={{ color: '#EF476F', display: 'flex-item', mb: { lg: 0, sm: -5, xs: -3 }, mt: { lg: 0, sm: -5, xs: -3 } }}>
            &nbsp;
          </Box>

          {/* Middle Initials */}
          <Box sx={{
            color: '#EF476F',
            display: {
              lg: 'flex-item',
              xs: 'none'
            }
          }}>
            <TransitionArray transitionArray={thachArray} />&nbsp;
          </Box>

          {/* <Box sx={{ height: 0, flexBasis: '100%', display: 'flex-item' }} /> */}

          {/* "Ngo" */}
          <Box sx={{ color: '#008DD5', display: 'flex-item', mb: 0 }}>
            <TransitionArray transitionArray={ngoArray} />
          </Box>
        </Box>

        <InfoTree aniRef={infoRef} />

      </Container>

      {showFooter &&
        <footer style={{ color: "gray", position: "fixed", bottom: 0, right: 0, marginRight: '1rem', marginTop: '5px' }}>
          <Card variant="outlined" sx={{ bgcolor: '#1e1e24', color: '#F4FFFD' }}>

            <Box sx={{ textAlign: 'right', mb: -3 }}>
              <IconButton sx={{ pt: 0, pr: 0 }} onClick={() => setShowFooter(false)}>
                <CloseIcon sx={{ color: '#CF476F' }} />
              </IconButton>
            </Box>

            <CardContent sx={{ mb: -2, textAlign: 'center' }}>
              <Typography sx={{ fontSize: 13, mb: 2 }} gutterBottom>
                This website is a work in progress.
            </Typography>
              <Button href="https://kevinngo.tech" target="_blank" variant="contained" endIcon={<OpenInNewIcon />} sx={{ fontSize: 12, bgcolor: '#EF476F', '&:hover': { bgcolor: '#CF476F' } }}>
                View old website
            </Button>
            </CardContent>
          </Card>
        </footer>
      }
    </>
  );
}

export default App;
