import React from 'react';  // 👈 add this
import Login from '@/pages/auth/login';
import Home from '@/pages/home';

const routes = [
  { 
    path: '/auth',
    children: [{
      path: 'login',
      element: <Login /> ,
    }]
  },
  { 
    path: '/',
    element: <Home /> ,
  },
];

export default routes;