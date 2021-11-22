import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {getComicsById, getSeriesById, getStoriesById} from "../../actions";
import {rootState, Character} from "../../constants/types";
import {CoverPage} from "../coverPage/CoverPage";
import "./CharacterDetailStyle.css";

export function CharacterDetail() {
  const allCharacters = useSelector((state: rootState) => state.characters);
  const comicsById = useSelector((state: rootState) => state.comicsById);
  const seriesById = useSelector((state: rootState) => state.seriesById);
  const storiesById = useSelector((state: rootState) => state.storiesById);
  const [character, setCharacter] = useState<Character>();
  const dispatch = useDispatch();
  const {id} = useParams<{id: string}>();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    allCharacters?.forEach((e) => {
      if (e.id.toString() === id) {
        setCharacter(e);
        return e;
      }
      return;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getComicsById(id));
    dispatch(getSeriesById(id));
    dispatch(getStoriesById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      {character?.description === "" ? null : (
        <div className='descriptionContainer'>
          <div className='descriptionTitle'>DESCRIPTION</div>
          <div className='description'>{character?.description}</div>
        </div>
      )}

      <div className='comicsTitle'>COMICS</div>
      <div className='comicsContainer'>
        {comicsById &&
          comicsById.map((comic, index) => {
            return (
              <CoverPage
                title={comic.title}
                thumbnail={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                key={index}
              />
            );
          })}
      </div>

      <div className='comicsTitle'>SERIES</div>
      <div className='comicsContainer'>
        {seriesById &&
          seriesById.map((serie, index) => {
            return (
              <CoverPage
                title={serie.title}
                thumbnail={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                key={index}
              />
            );
          })}
      </div>

      <div className='comicsTitle'>STORIES</div>
      <div className='comicsContainer'>
        {storiesById &&
          storiesById.map((storie, index) => {
            console.log("=====storie:", storie);

            return (
              <CoverPage
                title={storie.title}
                thumbnail={`${storie.thumbnail?.path}.${storie.thumbnail?.extension}`}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
}
