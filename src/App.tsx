import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import SearchPanel from "./SearchPanel";

const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (searchText: string) => {
    console.log("Axtarış: ", searchText);
  };

  return (
    <Router>
      <div>
        <Header />
        <IconButton className="nav-button" onClick={handleSearchIconClick}>
          <FaSearch style={{ color: "white" }} />
        </IconButton>
        {isSearchOpen && <SearchPanel onSearch={handleSearch} />}
        
      </div>
    </Router>
  );
};

export default App;
