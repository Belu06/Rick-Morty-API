import { useEffect } from "react";
import "./character.css";
import { useCharacter } from "../../hooks/useCharacter";

export const AllCharacters = () => {
  const { getAllCharacters, allCharacters } = useCharacter([]);

  //useEffect y useState Hooks

  useEffect(() => {
    getAllCharacters();
  }, []);

  function getEpisodes(episodes) {
    episodes.map((episode) => {
      const episodio = episode.slice(40);

      console.log(episodio);
    });
  }

  //useEffect recibe una funcion callback, es decir el codigo al ejecutar
  //recibe cuando se va a ejecutar

  return (
    <div>
      <div className="cajita">
        <div className="botones">
          <button className="boton2">Docs</button>
          <button className="boton2">About</button>
          <button className="amarillo">SUPPORT US</button>
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
                  <h3 className="gris">Last known location:</h3>
                  <p className="color">{item.location.name}</p>
                  <p>Episodes:</p>
                  <button onClick={() => getEpisodes(item.episode)}>
                    Click me{" "}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
