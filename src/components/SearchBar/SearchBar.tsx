import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllCharacters} from "../../actions";
import {rootState} from "../../constants/types";
import "./SearchBarStyle.css";

export function SearchBar() {
  const allCharacters = useSelector((state: rootState) => state.characters);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        /* onSearch(search); */
      }}
    >
      <input
        type='text'
        placeholder='Search...'
        /* value={search}
        onChange={(e) => set(e.target.value)} */
      />
      <input type='submit' value='Agregar' />
    </form>
  );
}
