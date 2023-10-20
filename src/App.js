
import './App.css';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import HousesPage from './Pages/HousesPage/HousesPage';

function App() {
  return (

        <Router>
          <Routes>
            <Route path="/houses" element={<HousesPage/>} />
          </Routes>
        </Router>

  );
}

export default App;
