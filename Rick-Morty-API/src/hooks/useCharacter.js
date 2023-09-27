import { useState } from "react";

export function useCharacter() {
  const [allCharacters, setAllCharacters] = useState([]);

  //FETCH ES UNA PETICION A UN SERVIDOR POR DATOS.
  //FETCH DEVUELVE UNA PROMESA.
  const getAllCharacters = () => {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setAllCharacters(data.results));
  };
  return {
    getAllCharacters,
    allCharacters,
  };
}
