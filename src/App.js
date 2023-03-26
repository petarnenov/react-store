import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useTimeStore } from './components/timeStore/timeStore';

import './App.css';

function Navigation() {
  const time = useTimeStore();
  return (
    <>
      <h1>React Router DOM</h1>
      <h2>{time}</h2>
      <ul>
        <NavLink to="/job/base" exact="true" >
          <h2>Base Form</h2>
        </NavLink>
        <NavLink to="/job/advanced" exact="true" >
          <h2>Advanced Form</h2>
        </NavLink>
        <NavLink to="/check" exact="true" >
          <h2>Check Area</h2>
        </NavLink>
      </ul>
      <Outlet />
    </>
  );
}


function App() {

  return (
    <Navigation />
  );
}

export default App;
