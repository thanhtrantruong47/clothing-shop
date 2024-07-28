import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Details from '../pages/Details';
import Order from '../pages/Order';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
  {
    path: 'product/:productId',
    element: <Details />,
  },
  {
    path: 'order',
    element: <Order />,
  },
]);

export default router;
