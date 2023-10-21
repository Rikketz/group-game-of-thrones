import { Link } from "react-router-dom"
import "./FooterGeneral.css"
import { useTranslation } from 'react-i18next';
export default function FooterGeneral(){

<div className="links">
    <a className="personajes">PERSONAJES</a><a className="casas">CASAS</a><a className="crono">CRONOLOGIA</a>
</div>
const {t} = useTranslation()
return (<>
    <div className="divLinksFooter">
        <Link className="casas" to="/characters">{t('translated-PERSONAJES')}</Link>
        <Link className="casas" to="/houses">{t('translated-CASAS')}</Link>
        <Link className="casas" to="/cronologia">{t('translated-CRONOLOGIA')}</Link>
    </div>
</>)

}