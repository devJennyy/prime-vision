import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./styles/App.css";
import Header from "./components/layout/Header";
import Homepage from "./pages/Homepage";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Footer from "./components/layout/Footer";
import Overview from "./pages/Overview";

function App() {
  return (
    <Router>
      <div className="w-full mx-auto overflow-x-hidden overflow-y-scroll no-scrollbar relative z-0">
        <Header />
        <div className="max-w-[1440px] mx-auto w-full 2xl:px-16 xl:px-10 px-5">
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" replace />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/overview" element={<Overview />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
