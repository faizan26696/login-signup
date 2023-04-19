import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter , Routes , Route} from 'react-router-dom'

import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Home from './Component/Home';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
