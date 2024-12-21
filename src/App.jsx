import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ActivitiesPage from './pages/ActivitiesPage';
import DonatePage from './pages/DonatePage';
import ContactPage from './pages/ContactPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF9933', // Saffron
    },
    secondary: {
      main: '#138808', // Green
    },
    background: {
      default: '#FFFFFF', // White
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

