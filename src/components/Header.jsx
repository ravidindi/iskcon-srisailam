import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../assets/logoiskcon.png'; // Adjust the path to your logo file

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
    { text: 'ENG', action: () => changeLanguage('en') },
    { text: 'TEL', action: () => changeLanguage('te') },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: '#ff9933', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Link
            to="/"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'inherit' }}
          >
            <img src={Logo} alt="ISKCON Logo" style={{ height: 50, marginRight: 10 }} />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 'bold',
                letterSpacing: 1,
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              ISKCON Srisailam
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {menuItems.slice(0, 4).map((item, index) => (
            <Button
              key={index}
              color="inherit"
              component={Link}
              to={item.link}
              sx={{
                marginX: 1,
                textTransform: 'uppercase',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#ffcc99' },
              }}
            >
              {item.text}
            </Button>
          ))}
          <Button
            color="inherit"
            onClick={menuItems[4].action}
            sx={{
              marginX: 1,
              textTransform: 'uppercase',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#ffcc99' },
            }}
          >
            {menuItems[4].text}
          </Button>
          <Button
            color="inherit"
            onClick={menuItems[5].action}
            sx={{
              marginX: 1,
              textTransform: 'uppercase',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#ffcc99' },
            }}
          >
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
        <Box
          sx={{
            width: 250,
            backgroundColor: '#f9f9f9',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                component={item.link ? Link : 'div'}
                to={item.link}
                onClick={item.action}
                sx={{
                  marginY: 1,
                  borderRadius: 1,
                  '&:hover': { backgroundColor: '#ffcc99' },
                }}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
