import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllCharacters} from "../../actions";
import {rootState} from "../../constants/types";
import {Card} from "../card/Card";

export function Home() {
  const allCharacters = useSelector((state: rootState) => state.characters);
  const dispatch = useDispatch();

  const requestAllCharacters = () => {
    dispatch(getAllCharacters());
    /* console.log("allCharacters ===> ", allCharacters); */
  };

  useEffect(() => {
    console.log("allCharacters ===> ", allCharacters);
  }, [allCharacters]);

  return (
    <div>
      <div>Home de Marvel-MediaMonks</div>
      <button onClick={requestAllCharacters}>GET_ALL_CHARACTERS</button>
      <div>
        {allCharacters &&
          allCharacters.map((e) => {
            return (
              <Card
                thumbnail={e.thumbnail}
                name={e.name}
                description={e.description}
              ></Card>
            );
          })}
      </div>
    </div>
  );
}
