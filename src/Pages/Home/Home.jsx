import FooterGeneral from "../../Components/FooterGeneral/FooterGeneral";
import Menu from "../../Components/Menu/Menu";
import "./Home.css";
import { useTranslation } from "react-i18next";
export default function Home() {

  const {t} = useTranslation();

  return (<>
  <div className="homeInicial">
    <div className="homeFlags">
      <Menu/>
    </div>
    <div className="homeimg">
      <div>
        <div className="gotletras">
          <span className="got">{t("translated-GAME OF THRONES")}</span>
        </div>
        
      </div>
      
    </div>
    <FooterGeneral/>
    </div>
    </>
  );
}
