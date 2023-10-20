import { useEffect, useState } from "react";
import axios from "axios";
import "./HousesPage.css"
import FooterGeneral from "../../Components/FooterGeneral/FooterGeneral";


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
        <div className="textAndListContainer">
            <input type="text" onChange={(e) => filterHouses(e.target.value)}/>
            <div className="listContainer">
                <ul className="housesList">
                    {housesFilter.map((house) => (<div className="housesContainer" key={house.id}><img className="housesFlags" src={`http://localhost:3020/${house.image}`} alt={house.name}/> <h5 className="housesNames">{house.name}</h5></div>))}
                </ul>
            </div>
        </div>
        <FooterGeneral/>
        </>
    )
}