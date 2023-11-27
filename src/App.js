import './App.css';
import { Route, Routes, BrowserRouter as Router,} from "react-router-dom";
import Home from './Pages/Home/Home';
import Menu from './Components/Menu/Menu';
// import Cronologia from './Pages/Cronologia/Cronologia';



function App() {
  return (
    <Router>          
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
             
      
    
    </Router>
  );
}

export default App;
