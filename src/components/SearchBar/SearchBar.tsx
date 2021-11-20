import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {rootState} from "../../constants/types";
import {FilterBtn} from "../filterBtn/FilterBtn";
import {SearchBarIcon} from "../searchIcon/SearchIcon";
import "./SearchBarStyle.css";

type Props = {
  onSearch: (searchInput: string) => void;
};

export function SearchBar({onSearch}: Props) {
  const filterSearchBy = useSelector(
    (state: rootState) => state.filterSearchBy
  );
  const [searchInput, setSearchInput] = useState<string>("");

  const filters = ["name", "comics", "stories", "series"];
  const [colors, setColors] = useState<string[]>([
    "selected",
    "unSelected",
    "unSelected",
    "unSelected",
  ]);

  onSearch(searchInput);

  useEffect(() => {
    let filterColors: string[] = [];
    for (let i = 0; i < filters.length; i++) {
      if (filters[i] === filterSearchBy) {
        filterColors = [...filterColors, "selected"];
      } else {
        filterColors = [...filterColors, "unSelected"];
      }
    }
    setColors(filterColors);
  }, [filterSearchBy]);

  return (
    <header className='headerSearch'>
      <input
        type='text'
        placeholder='Search...'
        className='inputSearch'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className='groupBtn'>
        <div>
          <FilterBtn id='name' styleTheme={colors[0]} />
        </div>
        <div>
          <FilterBtn id='comics' styleTheme={colors[1]} />
        </div>
        <div>
          <FilterBtn id='stories' styleTheme={colors[2]} />
        </div>
        <div>
          <FilterBtn id='series' styleTheme={colors[3]} />
        </div>
      </div>
    </header>
  );
}
