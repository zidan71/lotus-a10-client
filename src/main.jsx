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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErorElement></ErorElement>,
    children: [
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
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: '/viewDetails/:id',
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
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
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
