import FooterGeneral from "../../Components/FooterGeneral/FooterGeneral";
import Menu from "../../Components/Menu/Menu";
import "./Home.css";
export default function Home() {
  return (<>
  <div className="homeInicial">
    <div className="homeFlags">
      <Menu/>
    </div>
    <div className="homeimg">
      <div>
        <div className="gotletras">
          <span className="got">GAMES OF THRONES</span>
        </div>
        
      </div>
      
    </div>
    <FooterGeneral/>
    </div>
    </>
  );
}
