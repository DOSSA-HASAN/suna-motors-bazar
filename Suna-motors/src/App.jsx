import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// These are your actual pages (the ones you have built and are using)
import Home from './components/home/Home.jsx';
import AboutUs from './components/about/AboutUs.jsx';
import Contact from './components/contact/Contact.jsx';
import CarListing from './components/carlisting/CarListing.jsx';  
import SUV from './components/suv/SUV.jsx';                        
import CarDetails from './components/carDetails/CarDetails.jsx'; 

// Shared components
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Shared Header - appears on every page */}
        <Header />

        {/* Main content area */}
        <main className="flex-1">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* About Us */}
            <Route path="/about" element={<AboutUs />} />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* Full Inventory / All Cars */}
            <Route path="/cars" element={<CarListing />} />

            {/* SUV Category Page */}
            <Route path="/suv" element={<SUV />} />

            {/* Single Car Details Page (dynamic route example) */}
            <Route path="/car/:id" element={<CarDetails />} />
            {/* 404 - Page Not Found */}
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center h-screen text-center px-6">
                <h1 className="text-6xl font-black text-red-600 mb-4">404</h1>
                <p className="text-2xl text-gray-700 mb-8">Oops! Page not found.</p>
                <a href="/" className="px-10 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition">
                  Back to Home
                </a>
              </div>
            } />
          </Routes>
        </main>

        {/* Uncomment when you have a Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;