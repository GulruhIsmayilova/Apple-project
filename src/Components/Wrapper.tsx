import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (searchText: string) => {
    console.log("Axtarış: ", searchText);
  };

  return (
    <div>
      <Header />
      <IconButton className="nav-button" onClick={handleSearchIconClick}>
        <FaSearch style={{ color: "white" }} />
      </IconButton>
      <Outlet />
      <Footer />
      
    </div>
  );
};

export default App;
