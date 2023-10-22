import { Link } from "react-router-dom"
import "./FooterGeneral.css"
import { useTranslation } from 'react-i18next';
export default function FooterGeneral(){

const {t} = useTranslation()
return (<>
    <div className="divLinksFooter">
        <Link className="casas" to="/characters">{t('translated-PERSONAJES')}</Link>
        <Link className="casas" to="/houses">{t('translated-CASAS')}</Link>
        <Link className="casas" to="/chronology">{t('translated-CRONOLOGIA')}</Link>
    </div>
</>)

}