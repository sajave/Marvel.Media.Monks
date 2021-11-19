import {url} from "inspector";
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
        <div className='titleHeader'>{character?.name.toUpperCase()}</div>
      </div>
      <div className='imgHeaderAndHr'>
        <img
          className='imgHeader'
          src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
          alt='Not available'
        />
      </div>
      <hr className='redDividerHeader'></hr>

      <div className='descriptionContainer'>
        {character?.description === "" ? null : (
          <div className='descriptionTitle'>DESCRIPTION</div>
        )}
        <div className='description'>{character?.description}</div>
      </div>

      <div className='comicsContainer'>
        <div className='comicsTitle'>COMICS</div>
        <div>{`${character?.comics.items[0].resourceURI}`}</div>
        <div>
          {character?.comics.items &&
            character?.comics.items.map((e, index) => {
              return <div key={index}>{e.name}</div>;
            })}
        </div>
      </div>

      <div className='seriesContainer'>
        <div className='seriesTitle'>SERIES</div>
        <div>{`${character?.comics.items[0].resourceURI}`}</div>
        <div>
          {character?.series.items &&
            character?.series.items.map((e, index) => {
              return <div key={index}>{e.name}</div>;
            })}
        </div>
      </div>

      <div className='storiesContainer'>
        <div className='storiesTitle'>STORIES</div>
        <div>{`${character?.comics.items[0].resourceURI}`}</div>
        <div>
          {character?.stories.items &&
            character?.stories.items.map((e, index) => {
              return <div key={index}>{e.name}</div>;
            })}
        </div>
      </div>
    </div>
  );
}
