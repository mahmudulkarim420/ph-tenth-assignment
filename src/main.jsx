import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import RouteChangeSpinner from './Components/RouteChangeSpinner.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <Toaster />
      <RouterProvider router={router}>
        <RouteChangeSpinner />
      </RouterProvider>
    </AuthProvider>
  </StrictMode>
);
