import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import AboutUs from "./pages/AboutUs";
import SearchBar from "./SearchBar";
import SideBar from "./pages/SideBar"; // Assuming SideBar is in the components folder
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<Home />} />
          <Route path="Details" element={<Details />} />
          <Route path="AboutUs" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);