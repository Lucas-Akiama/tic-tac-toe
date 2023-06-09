import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/css/index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home'
import Principal from './principal';
import ErrorPage from './routes/ErrorPage';
import Game from './routes/App';
import Placar from './routes/Placar';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />
//   }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <Principal />,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element:<Home/>,
      },
      {
        path:"game",
        element:<Game />,
      },
      {
        path: "score",
        element:<Placar />,
      },


    ]
    
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
