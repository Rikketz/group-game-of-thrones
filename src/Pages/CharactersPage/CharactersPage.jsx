
import React, { useEffect, useState } from "react";
import axios from "axios";
import './style.css'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function CharacterPages() {
  const [characters, setCharacters] = useState([]);
  const [CharactersFilter, setCharactersFilter] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const { data } = await axios.get("http://localhost:3020/characters");
        setCharacters(data);
        setCharactersFilter(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCharacters();
  }, []);

  const filterCharacters = (e) => {
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(e.toLowerCase()));
    setCharactersFilter(filteredCharacters);
  };

  return (
    <div className="flexCharacters">
      <input className="input" placeholder="Buscar..." type="text" onChange={(e) => filterCharacters(e.target.value)} />
      <SimpleBar style={{ width:'95%', maxHeight: 1050 }}>
      <div className="flexImage">
        {CharactersFilter.map((character) => (
          <div key={character.id} className="character">
            <img
              className="imgCharacters"
              src={`http://localhost:3020/${character.image}`}
              alt={character.name}
            />
            <div className="hover-info">{character.name}</div>
          </div>
        ))}
      
      </div>
      </SimpleBar>
    </div>

  );
}