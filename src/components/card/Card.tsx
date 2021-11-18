import React from "react";
import {useSelector} from "react-redux";
import {rootState, Image} from "../../constants/types";

type Props = {
  thumbnail: Image;
  name: string;
  description: string;
};

export function Card({thumbnail, name, description}: Props) {
  const allCharacters = useSelector((state: rootState) => state.characters);

  return (
    <div>
      <img
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt='Not available'
      />
      <div>Name: {name}</div>
      <div>description: {description}</div>
    </div>
  );
}
