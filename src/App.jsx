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
import AuthProtectedRoute from "./pages/protectedpages/AuthProtectedRoute";
import Unauthorized from "./pages/Unauthorized";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/ads",
      element: (
        <AuthProtectedRoute allowedRoles={["user"]}>
          <AllAdsPage />
        </AuthProtectedRoute>
      ),
    },
    {
      path: "/ads/:id",
      element: (
        <AuthProtectedRoute allowedRoles={["user"]}>
          <AdDetailPage />
        </AuthProtectedRoute>
      ),
    },
    {
      path: "/user-homepage",
      element: (
        <AuthProtectedRoute allowedRoles={["user"]}>
          <UserHomePage />
        </AuthProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/unauthorized",
      element: <Unauthorized />,
    },
    {
      path: "vendor/:vendorId/ads",
      element: (
        <AuthProtectedRoute allowedRoles={["user"]}>
          <VendorPublicAdsPage />
        </AuthProtectedRoute>
      ),
    },

    {
      path: "/dashboard",
      element: (
        <AuthProtectedRoute allowedRoles={["vendor"]}>
          <DashboardLayout />
        </AuthProtectedRoute>
      ),
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
          path: "ads/:id",
          element: <EditAddPage />,
        },
        {
          path: "ads/:id",
          element: <VendorAdDetailPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
