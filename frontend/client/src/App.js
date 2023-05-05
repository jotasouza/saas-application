import React, {useMemo} from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import {themeSettings} from './theme';
import Navbar from './components/Navbar';
import Home from './components/screens/Home';
import About from './components/screens/About';
import Login from './components/screens/Login';
import Register from './components/screens/Register';


function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route rexact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
