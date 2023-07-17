import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import ShopBag from "./pages/ShopBag";
import ProductPage from "./pages/ProductPage/Index";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import { Loader as ProductPageLoader } from "./pages/ProductPage/Index";

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
        { path: "checkout", element: <Checkout /> },
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
