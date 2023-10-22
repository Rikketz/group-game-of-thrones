import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ChronologyPage.css";
import "simplebar-react/dist/simplebar.min.css";
// import FooterGeneral from "../../Components/FooterGeneral/FooterGeneral";
import AgeCharacter from "./AgeCharacter";
import FooterGeneral from "../../Components/FooterGeneral/FooterGeneral";
import MenuConCasa from "../../Components/MenuConCasa/MenuConCasa";
import { Link } from "react-router-dom";

function ChronologyPage() {
  
  const [characters, setCharacters] = useState([]);
  const [textoBoton, setTextoBoton] = useState("0");
  const [ascendente, setAscendente] = useState(true);

  const cambiarNumeroEdad = () => {
      setAscendente(!ascendente);
      getCharacter();
    };
;
  const getCharacter = async () => {
    const res = await axios("http://localhost:3020/characters");
    const charactersData = res.data

    if (ascendente) {
      charactersData.sort((a, b) => a.age - b.age);
    } else {
      charactersData.sort((a, b) => b.age - a.age);
    }   

    setCharacters(charactersData);
    if (charactersData.length > 0) {
      setTextoBoton(`${(charactersData[0].age || 0)}`)
    }
  }
;
  useEffect(() => {
    getCharacter();
    cambiarNumeroEdad(0);
  }, []);

  return (
    <>
    
    <div className="divHeader">
    <div className="goBack">
        <img src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/e042365d-a1dc-4fef-ab6c-245a7c85f922.svg" alt="flechi" className="goBackArrow"></img>
        <Link className="goBackVolver" to={"/houses"}> <p className="goBackVolver">Volver</p></Link>
      </div>
      
    <MenuConCasa/>
  </div>
    <div className="c-container">
    <div onClick={cambiarNumeroEdad} className="c-numeroEdad">
      <div className="c-circuloEdad">
        <p className="c-numeroCirculoEdad">{textoBoton}</p>
      </div>
    </div>
    <div className="c-flechaAbajo">
        <img className="c-imgFlechaAbajo" src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/26cb7354-51d3-4c56-b9bb-2f455e369f0a.svg" alt="flechiti"/>
      </div>
    <div className="container_colums">
      <div className="column">
        
        <ul className="container_colums_ul">
          <div className="c-divFalso"></div>
          {characters.filter((character, index) => index % 2 === 0)
            .map((character) => (
              <AgeCharacter key={character.id} {...character} laclase="c-column_left" laclase2={"infoCard-left"} />
            ))}
        </ul>
      </div>
      <div className="column">
        
        <ul className="container_colums_ul-right">
          {characters.filter((character, index) => index % 2 !== 0)
            .map((character) => (
              <AgeCharacter key={character.id} {...character} laclase="c-column_right"  laclase2={"infoCard-right"}/>
            ))}
        </ul>
      </div>
      </div>
    </div>
    <FooterGeneral/>
</>
  );
}
export default ChronologyPage;  
