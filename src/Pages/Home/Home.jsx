import Menu from "../../Components/Menu/Menu";
import "./Home.css";
import { useTranslation } from 'react-i18next';
export default function Home() {
  const { t } = useTranslation();
  return (
    <><Menu/>
    <div className="homeimg">
      <div>
        <div className="gotletras">
          <span className="got">GAMES OF THRONES</span>
        </div>
        <div className="links">
          <span className="personajes">{t('translated-paragraph')}</span>
          <span className="casas">CASAS</span>
          <span className="crono">CRONOLOGIA</span>
        </div>
      </div>
    </div>
    </>
  );
}
