import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Header";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
