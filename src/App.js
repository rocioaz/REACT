import './App.css';
import Header from './components/Header';
import Imagen from './components/Imagen';
import Productos from './components/Productos';
import Usuarios from './components/Usuarios';
import NotFound from './components/NotFound';
import Sidebar from './components/Sidebar';
import Panel from './components/Panel';


//import Users from './components/Users.js';
import { Routes, Route, Link} from "react-router-dom";


export default function App() {
  return (< div >
 < Header />
   <Sidebar />
   < Panel />
  
    <Routes>
    <Route path="/api/products"  element={< Productos />} />
    <Route path="/api/users" element={< Usuarios />} />
    <Route path = "/" element = {< Imagen /> } />
    <Route path="*" element={<NotFound/>}/>
    </Routes >
   

  </div>
  );
}