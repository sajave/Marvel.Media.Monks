import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router";
import {getAllCharacters} from "../../actions";
import {rootState} from "../../constants/types";
import "./NavBarStyle.css";

export function NavBar() {
  const history = useHistory();
  const {id} = useParams<{id?: string}>();

  return (
    <header className='navbar'>
      {id ? (
        <div className='Title' onClick={() => history.push("/")}>
          BACK
        </div>
      ) : (
        <div className='Title'>CHARACTERS</div>
      )}
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg'
        alt='MARVEL'
        className='Logo'
      />
    </header>
  );
}
