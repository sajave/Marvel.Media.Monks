import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllCharacters} from "../../actions";
import {rootState} from "../../constants/types";
import "./NavBarStyle.css";

export function NavBar() {
  return (
    <header className='navbar'>
      <div className='Title'>CHARACTERS</div>
    </header>
  );
}
