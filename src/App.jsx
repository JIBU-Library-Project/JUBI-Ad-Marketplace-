import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";

// General Pages
import HomePage from "./pages/HomePage";

import AdDetailPage from "./pages/AdDetailPage";
import CategoryAdsPage from "./pages/CategoryAdsPage";
import LoginPage from "./components/auth/LoginPage";

// Vendor Dashboard Layout & Pages
import DashboardLayout from "./layouts/DashboardLayout";
import VenderOverview from "./pages/vendor/VenderOverview";

import CreateAd from "./pages/vendor/CreateAd";
import UserHomePage from "./pages/protectedpages/UserHomePage";
import VendorAdsPage from "./pages/vendor/VendorAdsPage";
import AllAdsPage from "./pages/AllAdsPage";
import VendorPublicAdsPage from "./pages/VendorPublicAdsPage";
import EditAddPage from "./pages/vendor/EditAddPage";
import VendorAdDetailPage from "./pages/vendor/VendorAdDetailPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/ads",
      element: <AllAdsPage />,
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
      path: "/userHomepage",
      element: <UserHomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "vendor/:vendorId/ads",
      element: <VendorPublicAdsPage />,
    },
    {
      path: "/vendor/ads/:id",
      element: <VendorAdDetailPage />,
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
          path: "my-ads",
          element: <VendorAdsPage />,
        },
        {
          path: "create-ad",
          element: <CreateAd />,
        },
        {
          path: "ads/:id/edit",
          element: <EditAddPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
