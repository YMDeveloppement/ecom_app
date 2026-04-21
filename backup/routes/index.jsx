import React from 'react';  // 👈 add this
import Login from '@/pages/auth/login';
import Unauthorized from '@/pages/auth/unauthorized';
import Home from '@/pages/home';
import ProtectedRoute from '@/plugins/routes/ProtectedRoute.jsx';
import PublicRoute from '@/plugins/routes/PublicRoute.jsx';
const routes = [
  { 
    path: '/auth',
    element:<PublicRoute/>,
    children: [{
      path: 'login',
      element: <Login /> ,
    },{ 
    path: 'unauthorized',
    element: <Unauthorized /> ,      
  }]
  },
  { 
    element : <ProtectedRoute allowedRoles={['customer']} />,
    children: [{
      path: '/',
      element: <Home /> ,      
    }]
  },
  
];

export default routes;