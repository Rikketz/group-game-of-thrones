

import './App.css';
import CharacterPages from './Pages/CharactersPage/CharactersPage';
import DetailsHousesPage from './Pages/DetailsHousesPage/DetailsHousesPage';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import HousesPage from './Pages/HousesPage/HousesPage';
import Menu from './Components/Menu/Menu';
import Home from './Pages/Home/Home';


// import Gallery from './Gallery';

function App() {
  return (
    <div>
      <header >
      </header>
      <main>
      <Router>
      {/* <Menu/> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/houses" element={<HousesPage/>} />
            <Route path="/characters" element={<CharacterPages/>}/>
            <Route path="/houses/:id" element={<DetailsHousesPage/>}/>
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
