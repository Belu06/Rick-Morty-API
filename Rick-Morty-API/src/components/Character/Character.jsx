import { useEffect, useState } from "react";
import "./character.css";

export function Character() {
  const [character, setCharacter] = useState([]);

  //useEffect y useState Hooks

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacter(data.results));
  }, [setCharacter]);
  //useEffect recibe una funcion callback, es decir el codigo al ejecutar
  //recibe cuando se va a ejecutar
  return (
    <ul className="contenedor">
      {character.map((item, index) => (
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
}
