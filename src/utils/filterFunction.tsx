export const filterFunction = (
  allCharacters: any,
  filterSearchBy: any,
  setFilteredSearch: any,
  search: any
) => {
  if (filterSearchBy === "name") {
    const aux = allCharacters?.filter((e: any) => {
      return e.name.includes(search);
    });
    setFilteredSearch(aux);
    return;
  }

  if (filterSearchBy === "comics") {
    const characters = allCharacters?.filter((character: any) => {
      let aux = character.comics.items.some((comic: any) =>
        comic.name.includes(search)
      );
      if (aux) {
        return character;
      }
    });
    setFilteredSearch(characters);
  }

  if (filterSearchBy === "stories") {
    const characters = allCharacters?.filter((character: any) => {
      let aux = character.stories.items.some((story: any) =>
        story.name.includes(search)
      );
      if (aux) {
        return character;
      }
    });
    setFilteredSearch(characters);
  }

  if (filterSearchBy === "series") {
    const characters = allCharacters?.filter((character: any) => {
      let aux = character.stories.items.some((story: any) =>
        story.name.includes(search)
      );
      if (aux) {
        return character;
      }
    });
    setFilteredSearch(characters);
  }
};
