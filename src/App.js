import './App.css';
import CharacterPages from './Pages/CharactersPage/CharactersPage';
import DetailsHousesPage from './Pages/DetailsHousesPage/DetailsHousesPage';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import HousesPage from './Pages/HousesPage/HousesPage';
import Menu from './Components/Menu/Menu';
import Home from './Pages/Home/Home';
import { useTranslation } from 'react-i18next';


// import Gallery from './Gallery';
import UsersDetailPage from './Pages/DetailsCharactersPage/UsersDetailPage/UsersDetailPage';
import FooterGeneral from './Components/FooterGeneral/FooterGeneral';

function App() {
  const { t } = useTranslation();
  return (
    <div>
      <header >
      </header>
      <main>
      <Router>
     

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/houses" element={<HousesPage/>} />
            <Route path="/characters" element={<CharacterPages/>}/>
            <Route path="/characters/:id" element={<UsersDetailPage />} />
            <Route path="/houses/:id" element={<DetailsHousesPage/>}/>
          </Routes>
  
        </Router>
      </main>
    </div>
  );
}

export default App;
