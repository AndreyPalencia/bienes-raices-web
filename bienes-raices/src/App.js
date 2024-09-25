import { BrowserRouter as  Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import PrivateRoute from './components/privateroute';
import Inicio from './pages/inicio';
import Login from './pages/login';
import Anuncio from './pages/anuncio';
import Anunucios from './pages/anuncios';
import Nosotros from './pages/nosotros';
import Contacto from './pages/contacto';
import AdminPropiedades from './pages/adminpropiedades';
import CreatePropiedad from './pages/createPropiedad';
import ModificarPropiedad from './pages/modificarpropiedad';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        <Route path="/" element={<Inicio/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/anuncios" element={<Anunucios/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path='/admin/casas' element={<PrivateRoute><AdminPropiedades/></PrivateRoute>}/>
        <Route path='/admin/crear-casa' element={<PrivateRoute><CreatePropiedad/></PrivateRoute>}/>
        <Route path='/anuncio/:id' element={<PrivateRoute><Anuncio/></PrivateRoute>}/>
        <Route path='/admin/modificar-casa/:id' element={<PrivateRoute><ModificarPropiedad/></PrivateRoute>}/>
      </Routes>
    </Router>
  );
}

export default App;




