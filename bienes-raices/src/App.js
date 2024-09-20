import { BrowserRouter as  Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Nosotros from './pages/nosotros';
import Anunucios from './pages/anuncios';
import Contacto from './pages/contacto';
import Inicio from './pages/inicio';
import AdminPropiedades from './pages/adminpropiedades';
import Login from './pages/login';
import CreatePropiedad from './pages/createPropiedad';
import Anuncio from './pages/anuncio';
import ModificarPropiedad from './pages/modificarpropiedad';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route>
        <Route path="/anuncios" element={<Anunucios/>}></Route>
        <Route path="/contacto" element={<Contacto/>}></Route>
        <Route path='/admin/casas' element={<AdminPropiedades/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/admin/crear-casa' element={<CreatePropiedad/>}></Route>
        <Route path='/anuncio/:id' element={<Anuncio/>}></Route>
        <Route path='/admin/modificar-casa/:id' element={<ModificarPropiedad/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;



