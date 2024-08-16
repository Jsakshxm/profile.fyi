import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../utils/searchSlice';
const Searchbar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();


  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setSearch(newQuery);
    dispatch(setQuery(newQuery));

  };

  return (
    <div className="flex justify-center p-4 m-4">
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        className="h-8 lg:w-[500px] sm:w-[13rem] md:[20rem]  px-4 border rounded"
        placeholder="Search for products..."
      />
    </div>
  );
};

export default Searchbar;
