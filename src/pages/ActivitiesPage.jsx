import React, { useState } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useTranslation } from 'react-i18next';

const ActivitiesPage = () => {
  const { t } = useTranslation();
  const [view, setView] = useState('list');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const events = [
    { date: new Date(2023, 7, 15), title: 'Morning Aarti' },
    { date: new Date(2023, 7, 15), title: 'Bhagavad Gita Class' },
    { date: new Date(2023, 7, 16), title: 'Kirtan Session' },
    { date: new Date(2023, 7, 17), title: 'Prasadam Distribution' },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {t('activities')}
        </Typography>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleViewChange}
          aria-label="view selector"
          sx={{ mb: 2 }}
        >
          <ToggleButton value="list" aria-label="list view">
            {t('listView')}
          </ToggleButton>
          <ToggleButton value="calendar" aria-label="calendar view">
            {t('calendarView')}
          </ToggleButton>
        </ToggleButtonGroup>
        {view === 'list' ? (
          <List>
            {events.map((event, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={event.title}
                  secondary={event.date.toLocaleDateString()}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateCalendar
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
            />
          </LocalizationProvider>
        )}
      </Box>
    </Container>
  );
};

export default ActivitiesPage;

