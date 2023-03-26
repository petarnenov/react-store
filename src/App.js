import React, { Profiler } from 'react';
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
          <h2>Check Store</h2>
        </NavLink>
      </ul>
      <Outlet />
    </>
  );
}


function App() {

  return (
    <Profiler id="App" onRender={(id, phase, actualDuration, baseDuration, startTime, commitTime) => {
      console.log(id, phase, actualDuration, baseDuration, startTime, commitTime);
    }}>
      <Navigation />
    </Profiler>
  );
}

export default App;
