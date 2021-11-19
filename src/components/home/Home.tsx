import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {getAllCharacters} from "../../actions";
import {rootState} from "../../constants/types";
import {Card} from "../card/Card";
import {SearchBar} from "../SearchBar/SearchBar";
import "./HomeStyle.css";

export function Home() {
  const allCharacters = useSelector((state: rootState) => state.characters);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllCharacters());
  }, []);

  useEffect(() => {
    console.log("allCharacters ===> ", allCharacters);
  }, [allCharacters]);

  return (
    <div>
      <SearchBar />
      <div className='flexCards'>
        {allCharacters &&
          allCharacters.map((e, index) => {
            return (
              <div key={index} onClick={() => history.push(`/${e.id}`)}>
                <Card
                  thumbnail={e.thumbnail}
                  name={e.name}
                  description={e.description}
                ></Card>
              </div>
            );
          })}
      </div>
    </div>
  );
}
