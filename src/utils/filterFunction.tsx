export const filterFunction = (
  allCharacters: any,
  filterSearchBy: any,
  setAux: any,
  search: any
) => {
  if (filterSearchBy === "name") {
    const aux = allCharacters?.filter((e: any) => {
      return e.name.includes(search);
    });
    setAux(aux);
    return;
  }

  if (filterSearchBy === "comics") {
    const characters = allCharacters?.filter((e: any) => {
      let aux = e.comics.items.some((comic: any) =>
        comic.name.includes(search)
      );
      if (aux) {
        return e;
      }
    });
    setAux(characters);
  }
};
