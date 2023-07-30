import { Loader as ProductPageLoader } from "./pages/ProductPage/Index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/ProductPage/Index";
import PrivateRoutes from "./layout/PrivateRoutes";
import RootLayout from "./layout/RootLayout";
import Checkout from "./pages/Checkout";
import ShopBag from "./pages/ShopBag";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "shop-bag",
          element: <ShopBag />,
        },
        {
          path: "product/:productId",
          element: <ProductPage />,
          loader: ProductPageLoader,
        },
        {
          element: <PrivateRoutes />,
          children: [
            {
              path: "/:id/orders",
              element: <Orders />,
            },
            { path: "checkout", element: <Checkout /> },
          ],
        },
      ],
    },
    {
      path: "/auth",
      element: <Auth />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
