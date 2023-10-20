import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles/styleDetailsH.css';

export default function DetailsHousesPage() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const getHouses = async () => {
      try {
        const { data } = await axios.get("http://localhost:3020/houses/1");
        console.log(data)
        setHouses(data);
      } catch (error) {
        console.error(error);
      }
    };
    getHouses();
  }, []);

  return (
    <div className="houses">
      {houses.map((house) => (
        <div key={house.id} className="house">
          <img
            className="house-image"
            src={`http://localhost:3020/${house.image}`}
            alt={house.name}
          />
          <div className="house-info">
            <h1 className="house-name">{house.name}</h1>
            <div className="house-details">
              <h3><strong>Settlement:</strong> {house.settlement}</h3>
              <h3><strong>Region:</strong> {house.region}</h3>
              <h3><strong>Alliances:</strong> {house.alliances}</h3>
              <h3><strong>Religions:</strong> {house.religions}</h3>
              <h3><strong>Foundation:</strong> {house.foundation}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}