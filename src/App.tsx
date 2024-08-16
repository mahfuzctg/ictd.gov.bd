import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Header";
import SearchAndDropdown from "./components/SearchAndDropdown";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <div className={`min-h-screen `}>
        <Navbar />

        <div className="mt-12">
          <SearchAndDropdown />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
