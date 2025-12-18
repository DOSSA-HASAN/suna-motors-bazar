import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import GoogleCallback from "./pages/GoogleCallback";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/google-callback" element={<GoogleCallback />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* Redirect root to login */}
          <Route path="/" element={<Login />} />
          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
