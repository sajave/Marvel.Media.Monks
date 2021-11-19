import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllCharacters} from "../../actions";
import {rootState} from "../../constants/types";
import {SearchBarIcon} from "../searchIcon/SearchIcon";
import "./SearchBarStyle.css";

export function SearchBar() {
  const allCharacters = useSelector((state: rootState) => state.characters);
  const [filter, setFilter] = useState("name");

  return (
    <header className='headerSearch'>
      <input
        type='text'
        placeholder='Search...'
        className='inputSearch'
        /* value={search}
        onChange={(e) => set(e.target.value)} */
      />
      <SearchBarIcon />
    </header>
  );
}
