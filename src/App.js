import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HotelDetails from "./components/HotelDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/HotelDetails" element={<HotelDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
