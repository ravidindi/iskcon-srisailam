import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../assets/logo.jpeg'; // Adjust the path to your logo file

const Header = () => {
  const { t, i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: t('home'), link: '/' },
    { text: t('activities'), link: '/activities' },
    { text: t('donate'), link: '/donate' },
    { text: t('contact'), link: '/contact' },
    { text: 'EN', action: () => changeLanguage('en') },
    { text: 'TE', action: () => changeLanguage('te') },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src={Logo} alt="ISKCON Logo" style={{ height: 40, marginRight: 10 }} />
          <Typography variant="h6" component="div">
            ISKCON Srisailam
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {menuItems.slice(0, 4).map((item, index) => (
            <Button key={index} color="inherit" component={Link} to={item.link}>
              {item.text}
            </Button>
          ))}
          <Button color="inherit" onClick={menuItems[4].action}>
            {menuItems[4].text}
          </Button>
          <Button color="inherit" onClick={menuItems[5].action}>
            {menuItems[5].text}
          </Button>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} component={item.link ? Link : 'div'} to={item.link} onClick={item.action}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;