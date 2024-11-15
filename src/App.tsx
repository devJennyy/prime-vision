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

function App() {
  return (
    <Router>
      <div className="w-full mx-auto overflow-x-hidden overflow-y-scroll no-scrollbar relative z-0 dark:bg-[url('/images/bg-cover.png')] bg-[url('/images/light-bg-cover.png')] bg-cover bg-no-repeat h-full">
        <div className="max-w-[1440px] mx-auto w-full px-16">
          <Header />
          <Routes>
          <Route path="/" element={<Navigate to="/homepage" replace />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
