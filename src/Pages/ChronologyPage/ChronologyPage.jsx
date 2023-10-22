import axios from "axios";
import React, { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import "./ChronologyPage.css";
import "simplebar-react/dist/simplebar.min.css";
// import FooterGeneral from "../../Components/FooterGeneral/FooterGeneral";
import AgeCharacter from "./AgeCharacter";

function ChronologyPage() {
  
  const [characters, setCharacters] = useState([]);
  const [isOrder, setIsOrder] = useState(false);
  const [textoBoton, setTextoBoton] = useState("0");

  const cambiarTexto = (age) => {
    setTextoBoton(`${age}`);
    const cambiarNumeroEdad = () => {
      return "age";
    };
  };
  const getCharacter = async () => {
    const res = await axios("http://localhost:3020/characters");
    const charactersData = res.data
    charactersData.sort((a, b) => a.age - b.age);   
    setCharacters(charactersData);
  };
  useEffect(() => {
    getCharacter();
    cambiarTexto(0);
  }, []);

//   const orderAges = () => {
//     setIsOrder(!isOrder);
//     const copyCharacter = [...infoApi];
//     if (isOrder) {
//       const orderCharacter = copyCharacter.sort((a, b) => {
//         return a.age - b.age;
//       });

//       return setCharacters(orderCharacter);
//     }

//     const orderCharacter = copyCharacter.sort((a, b) => {
//       return b.age - a.age;
//     });
//     return setCharacters(orderCharacter);
//   };
console.log(characters)
  return (
    <div className="container">
      <div className="column">
        <h2>Personajes con índice par:</h2>
        <ul>
          {characters
            .filter((character, index) => index % 2 === 0)
            .map((character) => (
              <AgeCharacter key={character.id} {...character} />
            ))}
        </ul>
      </div>
      <div className="column">
        <h2>Personajes con índice impar:</h2>
        <ul>
          {characters
            .filter((character, index) => index % 2 !== 0)
            .map((character) => (
              <AgeCharacter key={character.id} {...character} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ChronologyPage;
