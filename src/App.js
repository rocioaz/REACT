import './App.css';
import Header from './components/Header';
import Imagen from './components/Imagen';
import Productos from './components/Productos';
import Producto from './components/Product';
import Usuarios from './components/Usuarios';
import Usuario from './components/Usuario';
import Sidebar from './components/Sidebar';
import Panel from './components/Panel';
import NotFound from './components/NotFound';

//import Users from './components/Users.js';
import { Routes, Route, useNavigate, useParams} from "react-router-dom";


export default function App() {
  const navigate = useNavigate();
  const params = useParams();
  console.log (params);
  return (< div >
 < Header />
   <Sidebar />
   < Panel />
  
   < Routes>
   <Route path="/api/products" element={< Productos navigate = {navigate} />}  />
   <Route path="/api/products/:id" element={< Producto />}  />
    <Route path="/api/users" element={< Usuarios navigate = {navigate} />} />
    <Route path="/api/users/:id" element={< Usuario navigate = {navigate}  />} />
    <Route path = "/" element = {< Imagen navigate = {navigate} /> } />
    <Route path="*" element={<NotFound navigate = {navigate} />}/>
    </ Routes>
   

  </div>
  );
}