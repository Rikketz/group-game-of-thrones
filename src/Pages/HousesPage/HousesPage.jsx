import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./HousesPage.css"
import FooterGeneral from "../../Components/FooterGeneral/FooterGeneral";
import { Link } from "react-router-dom";


export default function HousesPage(){
    const [houses, setHouses] = useState([]);
    const [housesFilter, setHousesFilter] = useState([]);

    useEffect(() => {
        const getData = async function(){
            try {
                const { data } = await axios.get("http://localhost:3020/houses");
                setHouses(data);
                setHousesFilter(data);
            } catch (error){
                console.log(error);
            }
        };
        getData();
    }, []);
    const filterHouses = (e) => {
        const filteredHouses = houses.filter((house) => house.name.toLowerCase().includes(e.toLowerCase()));
        setHousesFilter(filteredHouses)
    };
    return (<>
        <div className="housesTextAndListContainer">
            <div className="housesInput">
                <FontAwesomeIcon className="housesLupita" icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
                <input placeholder="Buscar..." className="housesInputInput" type="text" onChange={(e) => filterHouses(e.target.value)}/>
            </div>
            <div className="housesListContainer">
                <ul className="housesHousesList">
                    {housesFilter.map((house) => (<div className="housesHousesContainer" key={house.id}><Link to={`/houses/${house.id}`}><img className="housesHousesFlags" src={`http://localhost:3020/${house.image}`} alt={house.name}/></Link> <h5 className="housesNames">{house.name}</h5></div>))}
                </ul>
            </div>
        </div>
        <FooterGeneral/>
        </>
    )
}