import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Anunucios from './pages/anuncios';
import Contacto from './pages/contacto';
import Inicio from './pages/inicio';
import Login from './pages/login';
import Nosotros from './pages/nosotros';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route>
        <Route path="/anuncios" element={<Anunucios/>}></Route>
        <Route path="/contacto" element={<Contacto/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;



