import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from '../pages/HomePage';
import Layout from '../layout/Layout';
import Login from '../pages/Login';
import Register from '../pages/Register';

function AppRoutes() {
  const AppRoutes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'register',
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={AppRoutes} />;
}

export default AppRoutes;
