import './index.css';

import { Box, Container, Grid, Typography } from '@mui/material';
import { useMemo } from 'react';

import FaceCard from './FaceCard';

const AboutMe = () => {
  const Technologies = [
    // <span class="iconify" data-icon="la:npm"></span>
    { name: 'react.js', icon: 'la:react' },
    { name: 'redux', icon: 'cib:redux' },
    { name: 'html5', icon: 'fa-brands:html5' },
    { name: 'css3', icon: 'fa-brands:css3-alt' },
    { name: 'javascript', icon: 'cib:javascript' },
    { name: 'typescript', icon: 'cib:typescript' },
    { name: 'node.js', icon: 'la:node' },
    { name: 'npm', icon: 'la:npm' },
    { name: 'aws', icon: 'la:aws' },
    { name: 'firebase', icon: 'cib:firebase' },
    { name: 'postgresql', icon: 'cib:postgresql' },
  ];

  const renderTechnologies = useMemo(
    () => (
      <Box
        component="ol"
        justifyContent="center"
        flexWrap={'wrap'}
        display={'flex'}
        padding={0}
        marginTop={4}>
        {Technologies.map(({ name, icon }) => (
          <Box
            component="li"
            margin={3}
            className="technology-icon"
            sx={{ display: 'inline-flex' }}
            flexDirection="column"
            alignItems={'center'}>
            <Box
              component="span"
              className="iconify"
              data-icon={icon}
              data-width="64"
              data-height="64"
              marginBottom={1}
            />
            <Typography variant="caption">{name}</Typography>
          </Box>
        ))}
      </Box>
    ),
    [],
  );

  return (
    <div className="About-Me-Container">
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom marginBottom={4}>
          About me
        </Typography>
        <Grid container justifyContent="center" rowSpacing={1}>
          <Grid item lg={4} justifyContent="center" alignItems="center">
            <Grid item xs={10} justifyContent="center" alignItems="center">
              <FaceCard />
            </Grid>
          </Grid>
          <Grid
            item
            lg={8}
            justifyContent="center"
            alignItems="center"
            textAlign={'left'}>
            <Box>
              <Typography variant="h5" component="h3" marginY={2}>
                Hi 👋
              </Typography>
              <Typography variant="body1" color="#868e96">
                I'm a Software Engineer who enjoys dipping his toes in every
                tech stack he gets his hands on.
              </Typography>
              {renderTechnologies}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutMe;
