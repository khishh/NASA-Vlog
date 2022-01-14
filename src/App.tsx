import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { convertToDateFormat, generateAPODRequest } from './utils';
import { Apod } from './models/apod';
import APODCard from './components/APODCard';
import {Typography } from '@mui/material';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Saved from './pages/Saved';
import MenuBar from './components/MenuBar';



function App() {

  return (
    <div className="main-wrapper">
      <div className="apod-left-main-wrapper">
        {/* <Typography variant='h1'>Left</Typography> */}
        <MenuBar />
      </div>
      <Routes>
        <Route path="/" element={ <Home />}/>   
        <Route path="/saved" element={ <Saved />}/>   
      </Routes>
    </div>

  );
}

export default App;
