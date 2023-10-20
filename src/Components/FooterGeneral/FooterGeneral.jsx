import { Link } from "react-router-dom"
import "./FooterGeneral.css"
export default function FooterGeneral(){

<div className="links">
    <a className="personajes">PERSONAJES</a><a className="casas">CASAS</a><a className="crono">CRONOLOGIA</a>
</div>

return (<>
    <div className="divLinksFooter">
        <Link className="casas" to="characters">PERSONAJES</Link>
        <Link className="casas" to="">CASAS</Link>
        <Link className="casas" to="cronologia">CRONOLOGIA</Link>
    </div>
</>)

}