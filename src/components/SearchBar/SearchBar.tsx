import {useState} from "react";
import {FilterBtn} from "../filterBtn/FilterBtn";
import {SearchBarIcon} from "../searchIcon/SearchIcon";
import "./SearchBarStyle.css";

type Props = {
  onSearch: (searchInput: string) => void;
};

export function SearchBar({onSearch}: Props) {
  const [searchInput, setSearchInput] = useState<string>("");
  onSearch(searchInput);

  return (
    <header className='headerSearch'>
      <input
        type='text'
        placeholder='Search...'
        className='inputSearch'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <FilterBtn id='name' />
      <FilterBtn id='comics' />
      <FilterBtn id='stories' />
      <FilterBtn id='series' />
    </header>
  );
}
