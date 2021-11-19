import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router";
import {rootState, Character} from "../../constants/types";
import "./CharacterDetailStyle.css";

export function CharacterDetail() {
  const allCharacters = useSelector((state: rootState) => state.characters);
  const [character, setCharacter] = useState<Character>();
  /* const [character, setCharacter] = useState({}); */
  const {id} = useParams<{id?: string}>();

  useEffect(() => {
    allCharacters?.forEach((e) => {
      if (e.id.toString() === id) {
        setCharacter(e);
        return e;
      }
      return;
    });
  }, []);

  console.log("character", character);

  return (
    <div className='characterDetailContainer'>
      <div className='titleHeaderContainer'>
        <div className='titleHeader'>
          {character?.name.toUpperCase()}
          <div className='imgHeaderAndHr'>
            <div>IMG</div>
            <div className='redDividerHeader'></div>
          </div>
          <div className='descriptionContainer'>
            {character?.description === "" ? null : (
              <div className='descriptionTitle'>DESCRIPTION</div>
            )}
            <div className='description'>{character?.description}</div>
          </div>
        </div>
      </div>
      <div className='comicsContainer'>
        <div>COMICS</div>
      </div>
    </div>
  );
}

/* 
style={{
  backgroundImage: `url(${character?.thumbnail.path}.${character?.thumbnail.extension}))`,
  height: "500px",
}} */
/* <img
              className='imgHeader'
              src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
              alt='Not available'
            /> */
