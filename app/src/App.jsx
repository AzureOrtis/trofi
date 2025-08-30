import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import RestaurantDetail from "./pages/RestaurantDetail";
import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant/:id" element={<RestaurantDetail />} />
    </Routes>
  );
}

export default App;
