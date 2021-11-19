import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchIconStyle.css";

export function SearchBarIcon() {
  const search = () => {
    console.log("button para buscar");
  };

  return (
    <button onClick={search} className='styleSearchIcon'>
      <SearchIcon fontSize='small' />
    </button>
  );
}
