import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {getComicsById, getSeriesById} from "../../actions";
import {rootState, Character} from "../../constants/types";
import {CoverPage} from "../coverPage/CoverPage";
import "./CharacterDetailStyle.css";

export function CharacterDetail() {
  const allCharacters = useSelector((state: rootState) => state.characters);
  const comicsById = useSelector((state: rootState) => state.comicsById);
  const seriesById = useSelector((state: rootState) => state.seriesById);
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
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <div className='comicsTitle'>SERIES</div>
      <div className='comicsContainer'>
        {seriesById &&
          seriesById.map((serie, index) => {
            return (
              <div>
                <CoverPage
                  title={serie.title}
                  thumbnail={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                />
              </div>
            );
          })}
      </div>

      {/* {character?.series.items.length === 0 ? null : (
        <div className='seriesContainer'>
          <div className='seriesTitle'>SERIES</div>
          <div>
            {character?.series.items &&
              character?.series.items.map((e, index) => {
                return <div key={index}>{e.name}</div>;
              })}
          </div>
        </div>
      )} */}

      {character?.stories.items.length === 0 ? null : (
        <div className='storiesContainer'>
          <div className='storiesTitle'>STORIES</div>
          <div>
            {character?.stories.items &&
              character?.stories.items.map((e, index) => {
                return <div key={index}>{e.name}</div>;
              })}
          </div>
        </div>
      )}
    </div>
  );
}
