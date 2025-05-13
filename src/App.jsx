import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from 'react-router-dom';
import NavBar from './Navbar/Navbar';
import ContentPage from './Content/ContentPage';
import '././Content/ContentPage.css'
import Home from './Home/Home';

function App() {
  return (
    <div className="root-child">
      <NavBar />
      <ContentPage /> 
    </div>
  );
}

export default App
