import React from 'react';
import { Box, Container, Typography, IconButton, Stack, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';

import { useThemeContext } from '../ThemeContext.jsx'; // Import the context hook

const NavigationBar = () => {
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useThemeContext(); // Get values from context

  return (
    <Container maxWidth="sm" sx={{ padding: 1, bgcolor: theme.palette.background.paper }}>
      <Box
        sx={{
          height: '2rem',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          display: "flex",
          alignItems: 'center',
          justifyContent: 'space-between',
          
        }}
      >
        <Typography
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            background: 'linear-gradient(to right, rgb(235, 235, 235), rgb(62, 4, 4))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            }}
        >
          <CottageOutlinedIcon fontSize="large" sx={{ marginLeft: 0} } />
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton component={Link} to="/create" color={theme.palette.mode === 'light' ? 'primary' : 'secondary'}>
            <AddCircleIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={toggleColorMode} color={theme.palette.mode === 'light' ? 'primary' : 'secondary'}>
            {colorMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
};

export default NavigationBar;
