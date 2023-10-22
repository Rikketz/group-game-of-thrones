import { Link } from "react-router-dom";
import "./MenuConCasa.css"
import { i18n } from 'i18next';
import { useTranslation } from "react-i18next";



export default function MenuConCasa () {
    const {i18n} = useTranslation();
    const changeLanguage = (lng) =>{
        i18n.changeLanguage(lng)
    }

    return(
    
    <div className="menulogosConCasa">
        <Link className="menuConCasaCasita" to="/"> <img className="homeIcono" src="https://www.aaareynosa.org.mx/assets/images/home.png" alt="home"/>
        </Link>
        <img onClick={()=> changeLanguage('es')} className="menuConCasaspain" src="https://www.worldflags.es/imagenes/productos/m1503p_ESPANA.jpg" alt="spain"></img>
        <img onClick={()=> changeLanguage('en')} className= "menuConCasauk" src="https://pointmetotheplane.boardingarea.com/wp-content/uploads/2016/07/UK-Flag.jpg" alt="uk"></img>
    </div>
    )  

}