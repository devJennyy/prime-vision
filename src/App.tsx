import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";

function App() {
  return (
    <Router>
      <div className="w-full mx-auto overflow-x-hidden overflow-y-scroll no-scrollbar relative">
        <div className="max-w-[1440px] mx-auto w-full">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" replace />} />
          {/* <Route path="/homepage" element={<MainPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
