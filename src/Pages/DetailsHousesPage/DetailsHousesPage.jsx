
import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles/styleDetailsH.css';
import { useParams } from "react-router-dom";

function DetailsHousesPage() {
  const { id } = useParams();
  const [house, setHouse] = useState({});

  useEffect(() => {
    const getHouseDetails = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3020/houses/${id}`);
        setHouse(data);
      } catch (error) {
        console.error(error);
      }
    };
    getHouseDetails();
  }, [id]);

  return (
    <div className="Detailshouse">
      <img
        className="DetailshouseImage"
        src={`http://localhost:3020/${house.image}`}
        alt={house.name}
      />
       <h1 className="DetailshouseName">{house.name}</h1>
        <div className="DetailsHousesInfo">
        <div>
          <h3 className="DetailsHousesH3">Settlement: <p className="DetailshousesP">{house.settlement}</p></h3>
          </div>
          <div>
          <h3 className="DetailsHousesH3">Region: <p className="DetailshousesP">{house.region}</p></h3>
          </div>
          <div>
          <h3 className="DetailsHousesH3">Alliances: <p className="DetailshousesP">{house.alliances}</p></h3>
          </div>
          <div>
          <h3 className="DetailsHousesH3">Religions: <p className="DetailshousesP">{house.religions}</p></h3>
          </div>
          <div>
          <h3 className="DetailsHousesH3">Foundation: <p className="DetailshousesP">{house.foundation}</p></h3>
          </div>
        </div>
    </div>
  );
}

export default DetailsHousesPage;