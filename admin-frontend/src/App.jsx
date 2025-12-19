import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import GoogleCallback from "./pages/GoogleCallback";
import Listings from "./pages/Listings";
import AddListing from "./pages/AddListing";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import EditListing from "./pages/admin/EditListing";
import Profile from "./pages/admin/Profile";
import AddUser from "./pages/admin/AddUser";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/google-callback" element={<GoogleCallback />} />
        <Route path="/" element={<Navigate to="/listings" replace />} />

        {/* NOTE: To see the Sidebar on these pages, 
           we wrap the component inside the AdminLayout.
        */}

        {/* Car Listings */}
        <Route
          path="/listings"
          element={
            <ProtectedRoute>
              <Listings />
            </ProtectedRoute>
          }
        />

        {/* Add Listing - Updated path to match sidebar exactly */}
        <Route
          path="/add-listing"
          element={
            <ProtectedRoute>
              <AddListing />
            </ProtectedRoute>
          }
        />

        {/* Edit Listing */}
        <Route
          path="/inventory/edit/:id"
          element={
            <ProtectedRoute>
              <EditListing />
            </ProtectedRoute>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-user"
          element={
            <ProtectedRoute>
              <AddUser />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
