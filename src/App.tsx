import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Header";
import SearchAndDropdown from "./components/SearchAndDropdown";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Toggle dark mode and set class on html element
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Apply dark mode class to the HTML element
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className="mt-12">
          <SearchAndDropdown />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
