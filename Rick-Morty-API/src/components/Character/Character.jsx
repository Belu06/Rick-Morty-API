import { useEffect } from "react";
import "./character.css";
import { useCharacter } from "../../hooks/useCharacter";

export const AllCharacters = () => {
  const { getAllCharacters, allCharacters } = useCharacter([]);

  //useEffect y useState Hooks

  useEffect(() => {
    getAllCharacters();
  }, []);

  //useEffect recibe una funcion callback, es decir el codigo al ejecutar
  //recibe cuando se va a ejecutar

  return (
    <div>
      <div className="cajita">
        <div className="botones">
          <button class="boton2">Docs</button>
          <button class="boton2">About</button>
          <button class="amarillo">SUPPORT US</button>
        </div>
        <div className="titulo">
          <h1>The Rick and Morty API</h1>
        </div>
      </div>
      <div className="info">
        <ul className="contenedor">
          {allCharacters.map((item, index) => (
            <li key={index}>
              <div className="caja">
                <img src={item.image} alt="" />
                <div className="texto">
                  <h3 className="color">{item.name}</h3>
                  <p className="blanco">{item.status}</p>
                  <p className="blanco">{item.species}</p>
                  <h3 className="blanco">Last known location:</h3>
                  <p className="color">{item.location.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
