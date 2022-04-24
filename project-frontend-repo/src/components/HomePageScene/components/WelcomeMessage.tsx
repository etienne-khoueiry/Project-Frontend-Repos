import React, { useLayoutEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

interface MainFeaturedPostProps {
  post: {
    description: string;
    image: string;
    imageText: string;
    linkText: string;
    title: string;
  };
}

export default function WelcomeMessage() {
    const [welcomeMsg, setWelcomeMsg] = useState<string>("Welcome!");

    useLayoutEffect(() => {
        if(localStorage.getItem("UserFirstName") && localStorage.getItem("UserLastName")){
            setWelcomeMsg(`Welcome ${localStorage.getItem("UserFirstName")} ${localStorage.getItem("UserLastName")}!`);
        }else{
            setWelcomeMsg(`Welcome!`);
        }
    }, [localStorage.getItem("UserFirstName"), localStorage.getItem("UserLastName")])

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${"https://media.istockphoto.com/photos/london-skyline-and-primrose-hill-park-panorama-picture-id520047130?b=1&k=20&m=520047130&s=170667a&w=0&h=ljMiyvXFC7bWdOpPW3gX8DQJgZsalTcoukPBT0_OZs0="})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={"https://media.istockphoto.com/photos/london-skyline-and-primrose-hill-park-panorama-picture-id520047130?b=1&k=20&m=520047130&s=170667a&w=0&h=ljMiyvXFC7bWdOpPW3gX8DQJgZsalTcoukPBT0_OZs0="} alt={"post.imageText"} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 3, sm: 3, lg: 3, xl: 3 },
              pr: { md: 0 },
 
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {welcomeMsg}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {"post.description"}
            </Typography>
            <Link variant="subtitle1" href="#">
              {"post.linkText"}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
