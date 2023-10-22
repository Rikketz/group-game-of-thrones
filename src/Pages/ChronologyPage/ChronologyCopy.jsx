import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ChronologyPage.css";
import AgeCharacter from "./AgeCharacter";

function ChronologyPage() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const res = await axios("http://localhost:3020/characters");
    const charactersData = res.data;

    // Ordena los personajes por edad
    charactersData.sort((a, b) => a.age - b.age);

    setCharacters(charactersData);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="container">
      <div className="column">
        <h2>Personajes con índice par:</h2>
        <ul>
          {characters
            .filter((character, index) => index % 2 === 0)
            .map((character) => (
              <AgeCharacter key={character.id} character={character} />
            ))}
        </ul>
      </div>
      <div className="column">
        <h2>Personajes con índice impar:</h2>
        <ul>
          {characters
            .filter((character, index) => index % 2 !== 0)
            .map((character) => (
              <AgeCharacter key={character.id} character={character} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ChronologyPage;