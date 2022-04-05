import React, {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import './Productos.css';
function Usuario (props) {  
    const [item, setItem] = useState(null)  
    const [dataLoaded, setDataloaded] = useState(false) 
    const {id} = useParams()

    useEffect(() => {
       const getUser = () => {
            console.log(id);
            fetch(`/api/users/${id}`)
                .then((res) => res.json())
                .then((data) => setItem (
                        data.data));
        } 
        getUser();

    }, [id])

    return ( <div >
        <img src= {"/img/usuarios/" + item.image} width= "30%" /> 
                < br />

        <span className = "resaltado"> Id: </span> {
                    item.id
                }, < br/>

       <span className = "resaltado" > Nombre: </span> {
                 item.userName
                 },< br/>
        
        < br/> <span className = "resaltado" > Descripción: </span> {
                    item.product_description 
                }, < br />

        </div>

       
        
         
    );
}
export default Usuario;