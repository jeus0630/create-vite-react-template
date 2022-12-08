import { RouteObject, useRoutes } from 'react-router-dom';
import Layout from '@/components/common/Layout';
import User from '@/pages/User';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home></Home> },
      { path: '/user', element: <User></User> },
      { path: '*', element: <NotFound></NotFound> },
    ],
  },
];

function App() {
  const element = useRoutes(routes);

  return element;
}

export default App;
