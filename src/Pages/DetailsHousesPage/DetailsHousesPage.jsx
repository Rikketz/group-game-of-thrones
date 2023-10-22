
import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles/styleDetailsH.css';
import { Link, useParams } from "react-router-dom";
import MenuConCasa from "../../Components/MenuConCasa/MenuConCasa";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

export default function DetailsHousesPage() {
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

  return (<>
    <div className="divHeader">
    <div className="goBack">
        <img src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/e042365d-a1dc-4fef-ab6c-245a7c85f922.svg" alt="flechi" className="goBackArrow"></img>
        <Link className="goBackVolver" to={"/houses"}> <p className="goBackVolver">Volver</p></Link>
      </div>
      
    <MenuConCasa/>
  </div>
    <div className="Detailshouse">
    {/* <MenuConCasa/> */}
      <img
        className="DetailshouseImage"
        src={`http://localhost:3020/${house.image}`}
        alt={house.name}
      />
       <h1 className="DetailshouseName">{house.name}</h1>
        <div className="DetailsHousesInfo">
        <div>
          <h3 className="DetailsHousesH3">{t('translated-Settlement')} <p className="DetailshousesP">{house.settlement}</p></h3>
          </div>
          <div>
          <h3 className="DetailsHousesH3">{t('translated-Region')} <p className="DetailshousesP">{house.region}</p></h3>
          </div>
          <div>
          <h3 className="DetailsHousesH3">{t('translated-Alliances')} <p className="DetailshousesP">{house.alliances}</p></h3>
          </div>
          <div>
          <h3 className="DetailsHousesH3">{t('translated-RELIGIONS')} <p className="DetailshousesP">{house.religions}</p></h3>
          </div>
          <div>
          <h3 className="DetailsHousesH3">{t('translated-FOUNDATION')} <p className="DetailshousesP">{house.foundation}</p></h3>
          </div>
        </div>

    </div>
    </>
  );
}



