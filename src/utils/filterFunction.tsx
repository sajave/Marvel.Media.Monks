export const filterFunction = (
  allCharacters: any,
  filterSearchBy: any,
  setFilteredSearch: any,
  search: any
) => {
  if (filterSearchBy === "name") {
    const aux = allCharacters?.filter((e: any) => {
      return e.name.toLowerCase().includes(search);
    });
    setFilteredSearch(aux);
    return;
  }

  if (filterSearchBy === "comics") {
    // eslint-disable-next-line array-callback-return
    const characters = allCharacters?.filter((character: any) => {
      let aux = character.comics.items.some((comic: any) =>
        comic.name.toLowerCase().includes(search)
      );
      if (aux) {
        return character;
      }
    });
    setFilteredSearch(characters);
    console.log("//////////////");
    return;
  }

  if (filterSearchBy === "stories") {
    // eslint-disable-next-line array-callback-return
    const characters = allCharacters?.filter((character: any) => {
      let aux = character.stories.items.some((story: any) =>
        story.name.toLowerCase().includes(search)
      );
      if (aux) {
        return character;
      }
    });
    setFilteredSearch(characters);
    return;
  }

  if (filterSearchBy === "series") {
    // eslint-disable-next-line array-callback-return
    const characters = allCharacters?.filter((character: any) => {
      let aux = character.stories.items.some((story: any) =>
        story.name.toLowerCase().includes(search)
      );
      if (aux) {
        return character;
      }
    });
    setFilteredSearch(characters);
    return;
  }
};
