import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";


const Filters = ({ setSearchQuery, placeholder }) => {

  const [search, setSearch] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(()=>{
    setSearchQuery(search);
  },[search])

  return (
        <>
        <CiSearch  style={{fontSize:30}} onClick={()=>setShowSearchBar(!showSearchBar)}/>
         {showSearchBar && <input
            type="text"
            placeholder={placeholder}
            onChange={(e) => setSearch(e.target.value)}
            style={{width:300}}
          />}
        </>
  );
};

export default Filters;
