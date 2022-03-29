import React from 'react';
import './Sidebar.css';
import {Link
} from "react-router-dom";


function Sidebar() {
    return (<aside >
 
  <Link to = "/" > Home </Link><br />
      <Link to="/api/products" > Productos </Link><br />
       <Link to = "/api/users" > Usuarios </Link>
    
    </aside>
    );
}

export default Sidebar;