import React, {useMemo} from 'react';
import { Routes, Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import {themeSettings} from './theme';

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Router exact path="/" element={<Home />} />
          <Router exact path="/about" element={<About />} />
          <Router exact path="/login" element={<Login />} />
          <Router exact path="/register" element={<Register />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
