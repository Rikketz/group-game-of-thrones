import { Link } from "react-router-dom";
import "./MenuConCasa.css"
export default function Menu () {
    const clicksp = () =>{
        console.log("español");

    };   
    const clickuk = () => {
        
        console.log('ingles');
    };
    return(
    
    <div className="menulogos">
        <Link to="/"> <img className="homeIcono" src="https://www.aaareynosa.org.mx/assets/images/home.png" alt="home"/>
        </Link>
        <img onClick={clicksp} className="spain" src="https://www.worldflags.es/imagenes/productos/m1503p_ESPANA.jpg" alt="spain"></img>
        <img onClick={clickuk} className= "uk" src="https://pointmetotheplane.boardingarea.com/wp-content/uploads/2016/07/UK-Flag.jpg" alt="uk"></img>
    </div>
    )  

}