import React, { useState } from 'react';
import TemporaryDrawer from './TemporaryDrawer';
import NavBar from './NavBar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function MainComponent() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [appBarVisible, setAppBarVisible] = useState(false); // Use this state to control visibility

  const toggleDrawer = (newOpen) => () => {
    setDrawerOpen(newOpen);
  };

  const handleSettingsClick = () => {
    setAppBarVisible(true); // Show AppBar when Settings is clicked
    setDrawerOpen(false); // Close drawer if it's open
  };

  return (
    <div>
      <NavBar onSettingsClick={handleSettingsClick} />
      <TemporaryDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
      {appBarVisible && (
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6">Settings</Typography>
          </Toolbar>
        </AppBar>
      )}
      {/* Render the rest of your application here */}
    </div>
  );
}
