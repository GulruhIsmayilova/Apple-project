import React, { useState } from 'react';
import { InputBase } from '@mui/material';
import { FaSearch } from 'react-icons/fa';

interface SearchPanelProps {
  onSearch: (searchText: string) => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchText);
  };

  return (
    <div className="search-panel">
      <form onSubmit={handleSearchSubmit}>
        <InputBase
          placeholder="Search apple.com and more"
          value={searchText}
          onChange={handleSearchTextChange}
        />
        <button type="submit">
          <FaSearch style={{ verticalAlign: 'middle' }} /> Search
        </button>
      </form>
    </div>
  );
};

export default SearchPanel;
