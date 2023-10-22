import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
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
    // <div className='charactersDetails_div'>
    //       <MenuConCasa/>
    <>
    <div className="divHeader">
      <div className="goBack">
          <img src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/e042365d-a1dc-4fef-ab6c-245a7c85f922.svg" alt="flechi" className="goBackArrow"></img>
          <Link className="goBackVolver" to={"/characters"}> <p className="goBackVolver">Volver</p></Link>
        </div>
        
      <MenuConCasa/>
    </div>
    <div>
      {foundCharacter.id && (
        <>
          {" "}
          <InfoCharacter {...foundCharacter} />{" "}
          <img src={foundCharacter.image} alt="" />
        </>
      )}
    </div>
    </>
  );
};


export default UsersDetailPage
