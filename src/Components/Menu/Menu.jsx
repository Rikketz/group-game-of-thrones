import { useTranslation } from "react-i18next";
import "./Menu.css"
export default function Menu () {
    const {i18n} = useTranslation();
    const changeLanguage = (lng) =>{
        i18n.changeLanguage(lng)
    }

    return(
    
    <div className="menulogos">
        <img onClick={()=> changeLanguage('es')} className="spain" src="https://www.worldflags.es/imagenes/productos/m1503p_ESPANA.jpg" alt="spain"></img>
        <img onClick={()=> changeLanguage('en')} className= "uk" src="https://pointmetotheplane.boardingarea.com/wp-content/uploads/2016/07/UK-Flag.jpg" alt="uk"></img>
    </div>
    )  

}