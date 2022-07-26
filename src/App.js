import { Routes, Route, Link, useHistory } from "react-router-dom";
import React, { createContext, useEffect, useState } from 'react';
// import { LineChartOutlined, AreaChartOutlined, SafetyOutlined, PicLeftOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { LineChartOutlined, AreaChartOutlined, HomeOutlined, PicLeftOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import LandingPage from "./views/LandingPage";
import AgpView from "./views/AgpView";
import AboutView from "./views/AboutView";
import OverlayView from "./views/OverlayView";
import GlucoMineView from "./views/GlucoMineView"
import './App.css';
import { getSummary } from './api/api';

export const Context = createContext(1);

function App() {
  const [current, setCurrent] = useState(4);
  const [persons, setPersons] = useState([]);
  const [person, setPerson] = useState('1');

  useEffect(() => {
    async function getPersons() {
      const res = await getSummary();
      setPersons(res.map(item => item.subject))
    }
    getPersons();
  }, []);

  return (
    <div className="App">
      
      <header className="App-header">
      <Link className={current === 4 ? 'active' : ''} to="/glucovisPrototype/" onClick={() => setCurrent(4)}> 
        <title className="App-title">glucovis</title>
      </Link>
        
        <div className='App-header-container'>
          <span>Report </span> &nbsp; for &nbsp;
          <select className="select-person" onChange={(e) => setPerson(e.target.value)}>
            {
              persons.map((item, index) => {
                return (
                  <option key={index} value={item.split(' ')[1]}>{item}</option>
                  )
                })
            }
          </select>
        </div>
      </header>
      <div className="App-container">
        <div className="App-menu">
        <Link className={current === 4 ? 'active' : ''} to="/glucovisPrototype/home" onClick={() => setCurrent(4)}>
          <HomeOutlined style={{color: '#9655FF', lineHeight: '48px', padding: '0px 10px', verticalAlign:'text-bottom'}}/> Home
          </Link>
          <h1>CHARTS</h1>
          <Link className={current === 0 ? 'active' : ''} to="/glucovisPrototype/agp" onClick={() => setCurrent(0)}>
            <AreaChartOutlined style={{color: '#9655FF', lineHeight: '48px', padding: '0px 10px', verticalAlign:'text-bottom'}}/> AGP
          </Link>
          <Link className={current === 1 ? 'active' : ''} to="/glucovisPrototype/overlay" onClick={() => setCurrent(1)}>
            <LineChartOutlined style={{color: '#9655FF', lineHeight: '48px', padding: '0px 10px', verticalAlign:'text-top'}}/> Overlay
          </Link>
          <Link className={current === 2 ? 'active' : ''} to="/glucovisPrototype/glucomine" onClick={() => setCurrent(2)}>
            <PicLeftOutlined style={{color: '#9655FF', lineHeight: '48px', padding: '0px 10px', verticalAlign:'text-top'}}/> GlucoMine
          </Link>
          <div className='App-menu-bottom'>
            <Link className={current === 3 ? 'active' : ''} to="/glucovisPrototype/about" onClick={() => setCurrent(3)}>
              <QuestionCircleOutlined style={{color: '#9655FF', lineHeight: '48px', padding: '0px 10px', verticalAlign:'text-top'}}/> About
            </Link>
          </div>
        </div>
        <div className="App-content">
          <Context.Provider value={person}>
            <Routes>
              <Route path="/glucovisPrototype/" element={<LandingPage />} />
              <Route path="/glucovisPrototype/agp" element={<AgpView />} />
              <Route path="/glucovisPrototype/overlay" element={<OverlayView />} />
              <Route path="/glucovisPrototype/glucomine" element={<GlucoMineView />} />
              <Route path="/glucovisPrototype/about" element={<AboutView />} />
            </Routes>
          </Context.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
