
import React, { useEffect, useState } from "react";
import axios from "axios";
import './style.css'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import FooterGeneral from "../../Components/FooterGeneral/FooterGeneral";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuConCasa from "../../Components/MenuConCasa/MenuConCasa";


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

  return (<>
    <div className="charactersTextAndListContainer">
      <div className="charactersInputAndFlags">
        <div className="charactersInput">
          <FontAwesomeIcon className="charactersLupita" icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
          <input className="charactersInputInput" placeholder="Buscar..." type="text" onChange={(e) => filterCharacters(e.target.value)} />
        </div>
        <div className="charactersFlags">
          <MenuConCasa/>
      </div>
      </div>

    </div>
    <div className="charactersFlexCharacters">
      
      <SimpleBar style={{ width:'95%', height: 500 }}>
      <div className="charactersFlexImage">
        {CharactersFilter.map((character) => (
          <div key={character.id} className="charactersCharacter">
          <Link to={`/characters/${character.id}`}>
            <img
              className="charactersImgCharacters"
              src={`http://localhost:3020/${character.image}`}
              alt={character.name}
            /> </Link>
            <div className="hover-info">{character.name}</div>
            <div className="charactersHover-info">{character.name}</div>
          </div>
        ))}
      
      </div>
      </SimpleBar>
    </div>
        <FooterGeneral/>
    </>

  );
}