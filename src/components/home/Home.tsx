import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {getAllCharacters} from "../../actions";
import {Character, rootState} from "../../constants/types";
import {Card} from "../card/Card";
import {SearchBar} from "../SearchBar/SearchBar";
import "./HomeStyle.css";

export function Home() {
  const allCharacters = useSelector((state: rootState) => state.characters);
  const filterSearchBy = useSelector(
    (state: rootState) => state.filterSearchBy
  );

  const [search, setSearch] = useState<string>("");
  const [aux, setAux] = useState<Character[] | undefined>(allCharacters);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllCharacters());
  }, []);

  const onSearch = (searchInput: string) => {
    setSearch(searchInput);
  };

  const filteredBy = () => {
    if (filterSearchBy === "name") {
      setAux(
        allCharacters?.filter((e) => {
          return e.name.includes(search);
        })
      );
    }
  };

  console.log("aux //// ", aux);

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <div className='flexCards'>
        {aux &&
          aux.map((e, index) => {
            return (
              <div
                className='cardBtn'
                key={index}
                onClick={() => history.push(`/${e.id}`)}
              >
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
