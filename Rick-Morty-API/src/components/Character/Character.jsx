import { useEffect } from "react";
import "./character.css";
import { useCharacter } from "../../hooks/useCharacter";

export const AllCharacters = () => {
  const { getAllcharacters, allCharacter } = useCharacter([]);

  //useEffect y useState Hooks

  useEffect(() => {
    getAllcharacters();
  }, []);

  //useEffect recibe una funcion callback, es decir el codigo al ejecutar
  //recibe cuando se va a ejecutar
  return (
    <ul>
      {allCharacter.map((item, index) => (
        <li key={index}>
          <div>
            <img src={item.image} alt="" />
          </div>
          <div>
            <h3>{item.name}</h3>
            <p>{item.status}</p>
            <p>{item.origin.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
