import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import ErorElement from './components/ErorElement';
import AuthLayout from './components/AuthLayout/AuthLayout';
import Login from './components/AuthLayout/Login';
import Register from './components/AuthLayout/Register';
import AuthProvider from './components/Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import AddEquipement from './components/PrivatePage/AddEquipement';
import PrivateRoute from './components/PrivatePage/PrivateRoute';
import AllEquipment from './components/PrivatePage/AllEquipment';
import ViewDetails from './components/PrivatePage/ViewDetails';
import MyEquipement from './components/PrivatePage/MyEquipement';
import UpdateEquip from './components/PrivatePage/UpdateEquip';
import Home from './components/Home';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErorElement></ErorElement>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('https://assignment-10-server-theta-sand.vercel.app/users/limit')
      },
      {
        path: '/addEquip',
        element: <PrivateRoute>
          <AddEquipement></AddEquipement>
        </PrivateRoute>
      },
      {
        path: '/allEquip',
        element: <PrivateRoute>
          <AllEquipment></AllEquipment>
        </PrivateRoute>,
        loader: () => fetch('https://assignment-10-server-theta-sand.vercel.app/users')
      },
      {
        path: '/viewDetails/:id',
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-server-theta-sand.vercel.app/users/${params.id}`)
      },
      {
        path: '/myEquip',
        element:<PrivateRoute>
          <MyEquipement></MyEquipement>
        </PrivateRoute>,
        loader: () => fetch(``)
      },
      {
        path: '/updateEquip/:id',
        element: <PrivateRoute>
          <UpdateEquip></UpdateEquip>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-10-server-theta-sand.vercel.app/users/${params.id}`)
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
   <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
   </HelmetProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
