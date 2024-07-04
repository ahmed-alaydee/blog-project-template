import React from 'react';
import "./components/style.css"
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routes from './components/router';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterProvider router={routes}/>

  </React.StrictMode>
);
