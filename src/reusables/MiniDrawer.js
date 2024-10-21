import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox'; // Import InboxIcon
import MailIcon from '@mui/icons-material/Mail'; // Import MailIcon
import DashboardIcon from '@mui/icons-material/Dashboard'; // Add necessary icons
import TaskIcon from '@mui/icons-material/Assignment';
import BookIcon from '@mui/icons-material/Book';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[ 
          { text: 'Dashboard', icon: <DashboardIcon /> },
          { text: 'My Tasks', icon: <TaskIcon /> },
          { text: 'Book Service', icon: <BookIcon /> ,link: '/popular'},
          { text: 'Notifications', icon: <NotificationsIcon /> },
          { text: 'Profile Settings', icon: <SettingsIcon /> },
          { text: 'Help', icon: <HelpIcon /> },
          { text: 'Logout', icon: <ExitToAppIcon />, link: '/' }, // Add link property
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={item.link ? Link : undefined} to={item.link}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className='inline-block'>
      <Button onClick={toggleDrawer(true)}><MenuIcon style={{ color: "grey" }} /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
