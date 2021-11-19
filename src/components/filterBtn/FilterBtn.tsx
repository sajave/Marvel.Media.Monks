import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllCharacters, setFilterSearchBy} from "../../actions";
import {rootState} from "../../constants/types";
import {SearchBarIcon} from "../searchIcon/SearchIcon";

type Props = {
  id: string;
};

export function FilterBtn({id}: Props) {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        id={id}
        onClick={(e: any) => {
          dispatch(setFilterSearchBy(e.target.id));
        }}
      >
        {id.toUpperCase()}
      </button>
    </div>
  );
}
