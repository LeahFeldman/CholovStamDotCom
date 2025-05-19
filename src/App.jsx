import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import AboutUs from "./pages/AboutUs";
import styles from "./App.module.css";
import NotFound from "./pages/NotFound";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Details/:id" element={<Details />} />
        <Route path="AboutUs" element={<AboutUs filePath="/AboutUsContent.html"/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}







