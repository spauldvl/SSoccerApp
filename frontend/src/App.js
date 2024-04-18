import NewPractice from "./components/NewPractice";
import Calendar from "./components/Calendar";
import NavLinks from "./components/NavLinks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <NavLinks />
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NewPractice />
                <Calendar />
              </div>
            }
          />
          <Route path="/practice" element={<div></div>} />
          <Route path="/stats" element={<div></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
