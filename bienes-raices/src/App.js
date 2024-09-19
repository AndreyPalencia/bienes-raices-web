import { BrowserRouter as  Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Nosotros from './pages/nosotros';
import Anunucios from './pages/anuncios';
import Contacto from './pages/contacto';
import Inicio from './pages/inicio';
import AdminPropiedades from './pages/adminpropiedades';
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
      </Routes>
    </Router>
  );
}

export default App;



