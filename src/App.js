

import './App.css';
import CharacterPages from './Pages/CharactersPage/CharactersPage';
import DetailsHousesPage from './Pages/DetailsHousesPage/DetailsHousesPage';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import HousesPage from './Pages/HousesPage/HousesPage';


// import Gallery from './Gallery';
import UsersDetailPage from './Pages/DetailsCharactersPage/UsersDetailPage/UsersDetailPage';

function App() {
  return (
    <div>
      <header >
      </header>
      <main>
      <Router>
          <Routes>
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
