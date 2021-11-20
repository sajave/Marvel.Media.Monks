import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllCharacters, setFilterSearchBy} from "../../actions";
import {rootState} from "../../constants/types";
import {SearchBarIcon} from "../searchIcon/SearchIcon";
import "./filterBtn.css";

type Props = {
  id: string;
  styleTheme: string;
};

export function FilterBtn({id, styleTheme}: Props) {
  const dispatch = useDispatch();

  return (
    <div className='btnContainer'>
      <button
        id={id}
        className={styleTheme}
        onClick={(e: any) => {
          dispatch(setFilterSearchBy(e.target.id));
        }}
      >
        {id.toUpperCase()}
      </button>
    </div>
  );
}
