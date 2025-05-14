import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import AboutUs from "./pages/AboutUs";
import SearchBar from "./SearchBar";
import SideBar from "./pages/SideBar"; // Assuming SideBar is in the components folder
import "./index.css";
import React from 'react';
import './App.css';
import { useState } from 'react';
import NotFound from "./pages/NotFound";
export default function App() {

  return (
    <>
      <SearchBar/>
      <Routes>
        <Route>
          <Route path ="/" element={<Home />} />
          <Route path="Details/:id" element={<Details />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}







