import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
// import InfoCharacter from '../../Info/InfoCharacter';
import axios from 'axios';
import InfoCharacter from './../../../Components/Info/InfoCharacter';
import MenuConCasa from "../../../Components/MenuConCasa/MenuConCasa"
const UsersDetailPage = () => {
  const [characters, setCharacters] = useState([]);
  const [foundCharacter, setfoundCharacter] = useState({});
  const { id } = useParams();
  const getCharacters = async () => {
    const results = await axios(`http://localhost:3020/characters`);
    // console.log(results)
    setCharacters(results.data);
  };

  const findCharacterById = (valorid) => {
    const characterfound = characters.find(
      (character) => character.id === valorid
    );
    if (characterfound) {
      setfoundCharacter(characterfound);
    } else {
      setfoundCharacter({})
    }
    
  };
  useEffect(() => {
    getCharacters();
  }, []);
  useEffect(()=>{
    if (characters.length && id){
      findCharacterById(parseInt(id));
    }
  }, [characters,id]);

  return (
    <div className='charactersDetails_div'>
          <MenuConCasa/>

      {foundCharacter.id && (
        <>
          {" "}
          <InfoCharacter {...foundCharacter} />{" "}
          <img src={foundCharacter.image} alt="" />

        </>
      )}
    </div>
  );
};


export default UsersDetailPage
