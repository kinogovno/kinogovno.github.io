import React from 'react';
import s from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/Main-Page/MainPage';
import AboutPage from './components/About-Page/AboutPage';
import Comics from './components/Comics-Page/Comics';

function App() {
  return (
    <>
      <div className={s.Wrapper}>
        <Header/>
        <Routes>
          <Route path="" element={<MainPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/comics" element={<Comics/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;