import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {getAllCharacters} from "../../actions";
import {Character, rootState} from "../../constants/types";
import {filterFunction} from "../../utils/filterFunction";
import {Card} from "../card/Card";
import LoadingSpinner from "../loadingSpinner/Loading";
import {SearchBar} from "../SearchBar/SearchBar";
import "./HomeStyle.css";

export function Home() {
  const allCharacters = useSelector((state: rootState) => state.characters);
  const filterSearchBy = useSelector(
    (state: rootState) => state.filterSearchBy
  );

  const [search, setSearch] = useState<string>("");
  const [filteredSearch, setFilteredSearch] = useState<Character[] | undefined>(
    allCharacters
  );

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllCharacters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    filterFunction(allCharacters, filterSearchBy, setFilteredSearch, search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, filterSearchBy]);

  const onSearch = (searchInput: string) => {
    setSearch(searchInput);
  };

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      {filteredSearch ? (
        <div className='flexCards'>
          {filteredSearch &&
            filteredSearch.map((e, index) => {
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
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
