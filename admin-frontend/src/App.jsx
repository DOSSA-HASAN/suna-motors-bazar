import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import GoogleCallback from "./pages/GoogleCallback";
import AdminLayout from "./components/layout/AdminLayout";
import Listings from "./pages/Listings";
import AddListing from "./pages/AddListing";
import ViewListing from "./pages/ViewListing";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import EditListing from "./pages/admin/EditListing";
import AddUser from "./pages/admin/AddUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/google-callback" element={<GoogleCallback />} />
          {/* Redirect root to login */}
          <Route path="/" element={<Login />} />
          {/* Route to view all cars */}
          <Route
            path="/listings"
            element={
              <ProtectedRoute>
                <Listings />
              </ProtectedRoute>
            }
          />
          {/* Route to add a car */}
          <Route
            path="/add-listings"
            element={
              <ProtectedRoute>
                <AddListing />
              </ProtectedRoute>
            }
          />
          {/* Route to update a car */}
          <Route
            path="/inventory/edit/:id"
            element={
              <ProtectedRoute>
                <EditListing />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
