import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import App from './App';

import './index.css';
import JobForm from './components/JobForm';
import CheckArea from './components/CheckArea';
import FakeFilter from './components/FakeFilter';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="job" element={<Outlet />} >
        <Route path="base" element={<JobForm storeId={"base-form"} />} />
        <Route path="advanced" element={<JobForm storeId={"advanced-form"} Filter={FakeFilter} />} />
      </Route>
      <Route path="check" element={<CheckArea />} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
