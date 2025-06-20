import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";

// General Pages
import HomePage from "./pages/HomePage";
import AdsPage from "./pages/AdsPage";
import AdDetailPage from "./pages/AdDetailPage";
import CategoryAdsPage from "./pages/CategoryAdsPage";
import LoginPage from "./components/auth/LoginPage";

// Vendor Dashboard Layout & Pages
import DashboardLayout from "./layouts/DashboardLayout";
import VenderOverview from "./pages/vendor/VenderOverview";
import VendorAds from "./pages/vendor/VendorAds";
import CreateAd from "./pages/vendor/CreateAd";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/ads",
      element: <AdsPage />,
    },
    {
      path: "/ads/:id",
      element: <AdDetailPage />,
    },
    {
      path: "/category/:categoryName",
      element: <CategoryAdsPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <VenderOverview />,
        },
        {
          path: "adverts",
          element: <VendorAds />,
        },
        {
          path: "create-ad",
          element: <CreateAd isEdit={false} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
