import { ValoProvider } from "./context/MyContext";
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'
import Agents from "./pages/Agents";
import BottomNav from "./components/BottomNav"
import Login from "./pages/login";
import Tentang from "./pages/about";
import AgDetail from "./pages/detail"
const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Agents/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/about" element={<Tentang/>}></Route>
        <Route path="/detail/:uuid" element={<AgDetail/>}></Route>
      </Routes>
      
    </BrowserRouter>
   
      
    
  );
};

export default App;
